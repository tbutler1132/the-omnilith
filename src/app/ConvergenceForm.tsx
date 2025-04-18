"use client";
import { useState } from "react";
import { Convergence } from "../../lib/vectorEngine/types";
import { createConvergence } from "./actions";
import { useRouter } from "next/navigation";

export const ConvergenceForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(() => new Date().toISOString().slice(0, 16));
  const [id, setId] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newConvergence: Convergence = {
      id, // This should be generated or passed as a prop
      title,
      description,
      time,
    };
    createConvergence(newConvergence);
    setTitle("");
    setDescription("");
    setTime("");
    setId("");
    router.refresh();
  };

  return (
    <div onSubmit={handleSubmit}>
      Convergence Form
      <form>
        <label>
          Title:
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label>
          ID:
          <input value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
