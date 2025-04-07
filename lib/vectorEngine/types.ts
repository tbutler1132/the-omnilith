export interface Convergence {
  id: string;
  vector?: string;
  description: string;
  temporality: "present" | "future" | "virtual";
  horizon: number;
  apex: Convergence;
  tributaries: Convergence[];
  context: string[];
  status: "not started" | "in progress" | "completed";
  priority: "low" | "medium" | "high";
  focus: string;
  time: string;
}
