import { ConvergenceStore, Convergence } from "./types";
import fs from "fs/promises";

export class ConvergenceStoreJson implements ConvergenceStore {
  private filePath: string = "lib/vectorEngine/convergences.json";
  private convergences: Record<string, Convergence>;

  constructor() {
    this.convergences = {};
  }

  async load() {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      console.log("Data loaded:", data);
      this.convergences = JSON.parse(data);
    } catch (error) {
      console.error("Error loading convergences:", error);
    }
  }
  async save() {
    try {
      await fs.writeFile(
        this.filePath,
        JSON.stringify(this.convergences, null, 2)
      );
    } catch (error) {
      console.error("Error saving convergences:", error);
    }
  }

  createConvergence(convergence: Convergence) {
    this.convergences[convergence.id] = convergence;
    console.log("Convergence created:", this.convergences);
    this.save();
  }

  updateConvergence(id: string, convergence: Partial<Convergence>) {
    if (this.convergences[id]) {
      this.convergences[id] = { ...this.convergences[id], ...convergence };
      this.save();
    }
  }
  deleteConvergence(id: string) {
    if (this.convergences[id]) {
      delete this.convergences[id];
      this.save();
    }
  }
  getConvergence(id: string) {
    return this.convergences[id];
  }
  getAllConvergences() {
    return Object.values(this.convergences);
  }
}
