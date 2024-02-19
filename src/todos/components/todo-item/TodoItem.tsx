"use client"; // No hace falta ponerlo, ya que el componente padre ya es use client y conviert a este tambien

import { Todo } from "@prisma/client";
import { Check } from "lucide-react";

interface Props {
  todo: Todo;
  // TODO: Acciones que quiero llamar
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export function TodoItem({ todo, toggleTodo }: Props) {
  return (
    <article className="flex gap-4 p-6 border border-dashed border-[#ccc] rounded-lg bg-white">
      <button
        className="flex justify-center items-center border w-[30px] h-[30px] border-black rounded-lg"
        onClick={() => toggleTodo(todo.id, !todo.complete)}
      >
        {todo.complete ? <Check /> : null}
      </button>
      <div>
        <h2 className="font-semibold">{todo.description}</h2>
        <p className="text-xs text-[#666]">
          Created At: {todo.createdAt.toDateString()}
        </p>
      </div>
    </article>
  );
}
