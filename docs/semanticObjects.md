- Convergence
- Priority
- Status
- Horizon

export interface Convergence {
id: string;
description: string;
vector: boolean;
outcomes?: string[];
type: "personal" | "collective";
active: boolean;
horizon: number;
apex?: Convergence;
tributaries: Convergence[];
context: string[];
status: "not started" | "completed";
priority: "low" | "medium" | "high";
focus: string;
time: string;
reminder: string;
staging: boolean;
hours?: number;
user?: User;
}
