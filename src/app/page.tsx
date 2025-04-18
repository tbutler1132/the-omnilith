import styles from "./page.module.css";
import { ConvergenceStoreJson } from "../../lib/vectorEngine/convergence.impl";
import { ConvergenceForm } from "./ConvergenceForm";
import UpdateConvergenceButton from "./UpdateConvergenceButton";
import Link from "next/link";

const convertISOtoDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleString();
};

export default async function Home() {
  const convergenceStore = new ConvergenceStoreJson();
  await convergenceStore.load();
  const data = await convergenceStore.getAllConvergences();

  // Sort data by date and time
  const sortedData = data.sort(
    (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
  );

  return (
    <div className={styles.page}>
      <h1>Convergence Overview</h1>
      <table className={styles.taskTable}>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{convertISOtoDate(item.time)}</td>
              <td>{JSON.stringify(item)}</td>
              <td>
                <Link href={`/convergence/${item.id}`}>
                  <button>View</button>
                </Link>
              </td>
              <td>
                <UpdateConvergenceButton id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConvergenceForm />
    </div>
  );
}
