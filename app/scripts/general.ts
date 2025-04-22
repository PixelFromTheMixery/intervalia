export async function fetchExample() {
    const res = await fetch("http://127.0.0.1:8001/api/v1/health");
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
}

export async function fetchDatabases() {
    const res = await fetch("http://127.0.0.1:8001/api/v1/local/databases");
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
}

export async function fetchDatabase() {
    const res = await fetch("http://127.0.0.1:8001/api/v1/local/database");
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
}

export async function fetchTask() {
    const res = await fetch("http://127.0.0.1:8001/api/v1/local/tasl");
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
}

