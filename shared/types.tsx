export type Task = {
  id: string;
  name: string;
  properties: Record<string, any>;
};

// Url call placeholder
export type MakeCallProps<T> = {
  onCall: () => Promise<T>;
};