import { Convergence } from "../convergence";

export interface Store<T, ID = string> {
  create(item: T): Promise<T>;
  update(id: ID, updates: Partial<T>): Promise<T | null>;
  delete(id: ID): Promise<void>;
  get(id: ID): Promise<T | null>;
  getAll(): Promise<T[]>;
}

export type ConvergenceStore = Store<Convergence>;
