"use client";
import { deleteConvergence } from "./actions";
import { useRouter } from "next/navigation";

interface UpdateConvergenceButtonProps {
  id: string; // or number, depending on the expected type
}

const UpdateConvergenceButton = ({ id }: UpdateConvergenceButtonProps) => {
  const router = useRouter();
  const handleDelete = async (id: string) => {
    await deleteConvergence(id);
    router.refresh();
  };
  return <button onClick={() => handleDelete(id)}>Delete</button>;
};

export default UpdateConvergenceButton;
