import { FileConvergenceStore } from "../src/lib/stores/convergence/fileConvergenceStore";
import { Convergence } from "@/types/convergence";

const convergence: Convergence = {
  id: "1",
  title: "Convergence Title",
  description: "Convergence Description",
  vector: true,
  outcomes: ["Outcome 1", "Outcome 2"],
  type: "Personal",
  active: true,
  horizon: "0",
  apex: "Apex",
  tributaries: ["Tributary 1", "Tributary 2"],
  context: ["AM", "PM"],
  status: "Active",
  priority: "High",
  focus: "Misc",
  time: "12:00",
  reminder: "1 hour",
  staging: false,
};

FileConvergenceStore.create(convergence);
