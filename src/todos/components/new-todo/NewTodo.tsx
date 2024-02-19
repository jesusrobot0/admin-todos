"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import * as todosApi from "@/todos/helpers/todos";

export function NewTodo() {
  const [description, setDescription] = useState("");
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    const newTodo = await todosApi.createTodo(description);
    setDescription("");
    router.refresh();
  };

  return (
    <div className="mb-8 flex justify-between items-center">
      <form className="flex items-center gap-2" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          className="w-[420px] h-[45px] px-3 border border-[#ccc] rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="w-[100px] h-[45px] text-white rounded bg-[#78c4f4]"
        >
          Add
        </button>
      </form>

      <button className="flex items-center justify-center gap-2 w-[100px] h-[45px] text-white rounded bg-red-400">
        <Trash size={18} />
        Delete
      </button>
    </div>
  );
}
