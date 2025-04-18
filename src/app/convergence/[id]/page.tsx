import { ConvergenceStoreJson } from "../../../../lib/vectorEngine/convergence.impl";

export const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const convergenceStore = new ConvergenceStoreJson();
  await convergenceStore.load();
  const data = convergenceStore.getConvergence(id);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default Page;
// export default async function Page() {
