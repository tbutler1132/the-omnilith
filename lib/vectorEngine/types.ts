export interface Convergence {
  id: string;
  vector?: string;
  description: string;
  temporality: "present" | "future" | "virtual";
  horizon: number;
  apex?: Convergence;
  tributaries: Convergence[];
  context: string[];
  status: "not started" | "in progress" | "completed";
  priority: "low" | "medium" | "high";
  focus: string;
  time: string;
}

export interface ConvergenceStore {
  createConvergence: (convergence: Convergence) => void;
  updateConvergence: (id: string, convergence: Partial<Convergence>) => void;
  deleteConvergence: (id: string) => void;
  getConvergence: (id: string) => Convergence | undefined;
  getAllConvergences: () => Convergence[];
}
