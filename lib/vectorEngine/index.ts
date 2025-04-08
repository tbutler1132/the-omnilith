import { ConvergenceStoreJson } from "./convergence.impl";

const convergenceStore = new ConvergenceStoreJson();
async function run() {
  await convergenceStore.load();
  convergenceStore.createConvergence({
    id: "2",
    vector: "vector1",
    description: "Convergence 1",
    temporality: "present",
    horizon: 1,
    tributaries: [],
    context: ["context1"],
    status: "not started",
    priority: "medium",
    focus: "Software",
    time: "2023-10-01",
  });
}

run();
