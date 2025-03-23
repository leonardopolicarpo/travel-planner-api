export interface LoadUserById {
  load(id: string): Promise<string | null>;
};