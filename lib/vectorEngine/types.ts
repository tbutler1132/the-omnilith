//Entities
export interface Convergence {
  id: string;
  title: string;
  description: string;
  time: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Horizon {
  id: string;
  name: string;
  description: string;
  order: number;
}

export interface ConvergenceStore {
  createConvergence: (convergence: Convergence) => void;
  updateConvergence: (id: string, convergence: Partial<Convergence>) => void;
  deleteConvergence: (id: string) => void;
  getConvergence: (id: string) => Convergence | undefined;
  getAllConvergences: () => Convergence[];
}
