"use server";
import { ConvergenceStoreJson } from "../../lib/vectorEngine/convergence.impl";
import { Convergence } from "../../lib/vectorEngine/types";

export const createConvergence = async (newConvergence: Convergence) => {
  // This function will be called on the server side
  // You can use it to create a new convergence
  // For example, you can call the createConvergence method from ConvergenceStoreJson here
  const convergenceStore = new ConvergenceStoreJson();
  await convergenceStore.load();
  convergenceStore.createConvergence(newConvergence);
};

export const deleteConvergence = async (id: string) => {
  // This function will be called on the server side
  // You can use it to delete a convergence
  // For example, you can call the deleteConvergence method from ConvergenceStoreJson here
  const convergenceStore = new ConvergenceStoreJson();
  await convergenceStore.load();
  convergenceStore.deleteConvergence(id);
};
