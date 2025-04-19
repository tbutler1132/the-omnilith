import prompts from "prompts";
import { FileConvergenceStore } from "../src/lib/stores/convergence/fileConvergenceStore";
import convergenceSchema from "../src/schemas/semantic/convergence.json" assert { type: "json" };

const createConvergence = async () => {
  const questions: prompts.PromptObject[] = [
    {
      type: "text",
      name: "title",
      message: "What is the title of the convergence?",
    },
    {
      type: "text",
      name: "description",
      message: "What is the description of the convergence?",
    },
    {
      type: "date",
      name: "time",
      message: "When must the convergence occur?",
      validate: (date) =>
        date < Date.now() ? "Chosen date should be in the future" : true,
    },
    {
      type: "select",
      name: "env",
      choices: [
        { title: "dev", value: "dev" },
        { title: "prod", value: "prod" },
      ],
      initial: 0,
      message: "Which environment do you want to use?",
    },
  ];

  const response = await prompts(questions);

  try {
    const fileConvergenceStore = new FileConvergenceStore(response.env);
    fileConvergenceStore.create({
      id: crypto.randomUUID(),
      title: response.title,
      description: response.description,
      time: response.time.toString(),
      schemaVersion: parseInt(convergenceSchema.schemaVersion),
    });
    console.log("Convergence created successfully");
  } catch (error) {
    console.error("Error:", error);
  }
};

createConvergence();
