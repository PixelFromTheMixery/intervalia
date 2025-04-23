import { Task } from "@shared/types";

import SQLite from "react-native-sqlite-storage";

SQLite.enablePromise(true);

const getDB = async () => {
  return await SQLite.openDatabase({ name: "tasks.db", location: "default" });
};

export async function setupDatabases() {
  const db = await getDB();
  await db.transaction(async (tx) => {
    await tx.executeSql(`
      CREATE TABLE IF NOT EXISTS databases (
        id TEXT PRIMARY KEY NOT NULL,      -- Notion ID
        name TEXT,
        properties TEXT                    -- JSON Stringified
        updated_at TEXT,
        dirty INTEGER
      );
    `);
  });

  await db.transaction(async (tx) => {
    await tx.executeSql(`
      CREATE TABLE IF NOT EXISTS tasks (
        id TEXT PRIMARY KEY NOT NULL,      -- Notion ID
        database_id TEXT NOT NULL,         -- FK to local database.id
        name TEXT,
        properties TEXT,                   -- JSON stringified
        updated_at TEXT,
        dirty INTEGER,
        FOREIGN KEY (database_id) REFERENCES databases(id)
      );
    `);
  });

  await db.transaction(async (tx) => {
    await tx.executeSql(`
      CREATE TABLE IF NOT EXISTS sync_queue (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        entity_type TEXT,     -- 'task', 'pomodoro', etc.
        entity_id TEXT,       -- local ID
        action TEXT,          -- 'create', 'update', 'delete'
        payload TEXT,         -- optional: JSON blob of mutation
        queued_at TEXT
      );
    `);
  });
}

export async function upsertTaskFromAPI(task: Task, databaseId: string) {
  const db = await getDB();
  const now = new Date().toISOString();

  await db.transaction(async (tx) => {
    await tx.executeSql(
      `INSERT OR REPLACE INTO tasks
       (id, database_id, name, properties, updated_at, dirty)
       VALUES (?, ?, ?, ?, ?, 0)`,
      [task.id, databaseId, task.name, JSON.stringify(task.properties), now]
    );
  });
}
