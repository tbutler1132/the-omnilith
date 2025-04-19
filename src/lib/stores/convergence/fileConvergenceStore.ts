// import { ConvergenceStore } from "../../../../types/core/store";
import { Convergence } from "../../../types/convergence";
import fs from "fs/promises";

export const FileConvergenceStore = {
  async create(item: Convergence) {
    const filePath = "../data/convergence.json";

    try {
      // Read the existing data from the file
      const data = await fs.readFile(filePath, "utf-8").catch(() => "[]");
      const items = JSON.parse(data);

      // Add the new item to the array
      items.push(item);

      // Write the updated array back to the file
      await fs.writeFile(filePath, JSON.stringify(items, null, 2), "utf-8");

      return item;
    } catch (error) {
      console.error("Error writing to file:", error);
      throw error;
    }
  },
};
