import prompts from "prompts";
import { FileConvergenceStore } from "../src/lib/stores/convergence/fileConvergenceStore";

const getConvergences = async () => {
  const response = await prompts({
    type: "select",
    name: "filter",
    message: "What convergences do you want to get?",
    choices: [
      { title: "Next week", value: "nextWeek" },
      { title: "Today", value: "today" },
      { title: "All convergences", value: "all" },
    ],
  });

  if (response.filter === "nextWeek") {
    console.log("Fetching convergences for the next week...");
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const today = new Date();
    const fileConvergenceStore = new FileConvergenceStore("dev");
    const convergences = await fileConvergenceStore.getAll();
    const filteredConvergences = convergences.filter((convergence) => {
      const convergenceDate = convergence.time
        ? new Date(convergence.time)
        : new Date(0);
      return convergenceDate > today && convergenceDate <= nextWeek;
    });
    console.log("Convergences for the next week:", filteredConvergences);
    return;
  } else if (response.filter === "today") {
    console.log("Fetching convergences for today...");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const fileConvergenceStore = new FileConvergenceStore("dev");
    const convergences = await fileConvergenceStore.getAll();
    const filteredConvergences = convergences.filter((convergence) => {
      const convergenceDate = convergence.time
        ? new Date(convergence.time)
        : new Date(0);
      return (
        convergence.time &&
        convergenceDate >= today &&
        convergenceDate < tomorrow
      );
    });
    console.log("Convergences for today:", filteredConvergences);
    return;
  } else if (response.filter === "all") {
    console.log("Fetching all convergences...");
    // Proceed to fetch all convergences
    const fileConvergenceStore = new FileConvergenceStore("dev");
    const convergences = await fileConvergenceStore.getAll();
    if (convergences.length === 0) {
      console.log("No convergences found.");
      return;
    }
    console.log("Convergences:", convergences);
  }
};

getConvergences();
