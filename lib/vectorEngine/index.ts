import { ConvergenceStoreJson } from "./convergence.impl";

const convergenceStore = new ConvergenceStoreJson();
async function run() {
  await convergenceStore.load();
}
run();
convergenceStore.createConvergence({
  id: "1",
  vector: "vector1",
  description: "Convergence 1",
  temporality: "present",
  horizon: 10,
  tributaries: [],
  context: ["context1"],
  status: "not started",
  priority: "medium",
  focus: "focus1",
  time: "2023-10-01",
});
