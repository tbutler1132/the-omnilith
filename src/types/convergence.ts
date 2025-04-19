export interface Convergence {
  title: string;
  id: string;
  description: string;
  vector: boolean;
  outcomes?: string[];
  type: string;
  active: boolean;
  horizon: string;
  apex?: string;
  tributaries?: string[];
  context?: string[];
  status: string;
  priority: string;
  focus?: string;
  time?: string;
  reminder?: string;
  staging: boolean;
  hours?: number;
  user?: string;
}