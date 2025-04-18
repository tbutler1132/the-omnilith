import { ConvergenceStoreJson } from "./convergence.impl";

const convergenceStore = new ConvergenceStoreJson();
async function run() {
  await convergenceStore.load();
  convergenceStore.createConvergence({
    id: "3",
    description: "Feed me",
    time: "2025-04-19T17:30:00.000Z",
    title: "Convergence 1",
  });
}

run();
