import React from "react";
import { ConvergenceStoreJson } from "../../../lib/vectorEngine/convergence.impl";

const Page: React.FC = async () => {
  const convergenceStore = new ConvergenceStoreJson();
  await convergenceStore.load();
  const convergences = convergenceStore.getAllConvergences();
  console.log("Convergences:", convergences);
  return (
    <div>
      <h1>{convergences.map((cov) => cov.vector)}</h1>
    </div>
  );
};

export default Page;
