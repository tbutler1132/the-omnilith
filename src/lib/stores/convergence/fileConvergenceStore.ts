import { Convergence } from "../../../types/convergence";
import fs from "fs/promises";

export class FileConvergenceStore {
  private filePath = "";

  constructor(environment: string) {
    this.filePath = `src/data/${environment}/convergence.json`;
  }

  async create(item: Convergence): Promise<Convergence> {
    try {
      const data = await fs.readFile(this.filePath, "utf-8").catch(() => "[]");
      const items = JSON.parse(data);

      items.push(item);

      await fs.writeFile(
        this.filePath,
        JSON.stringify(items, null, 2),
        "utf-8"
      );

      return item;
    } catch (error) {
      console.error("Error writing to file:", error);
      throw error;
    }
  }
}
