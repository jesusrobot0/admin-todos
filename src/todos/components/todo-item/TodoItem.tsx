"use client"; // No hace falta ponerlo, ya que el componente padre ya es use client y conviert a este tambien

import { startTransition, useOptimistic } from "react";
import { Todo } from "@prisma/client";
import { Check } from "lucide-react";

interface Props {
  todo: Todo;
  // TODO: Acciones que quiero llamar
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export function TodoItem({ todo, toggleTodo }: Props) {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    })
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
      toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch (error) {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
    }
  };

  return (
    <article className="flex gap-4 p-6 border border-dashed border-[#ccc] rounded-lg bg-white">
      <button
        className="flex justify-center items-center border w-[30px] h-[30px] border-black rounded-lg"
        // onClick={() => toggleTodo(todoOptimistic.id, !todoOptimistic.complete)}
        onClick={onToggleTodo}
      >
        {todoOptimistic.complete ? <Check /> : null}
      </button>
      <div>
        <h2 className="font-semibold">{todoOptimistic.description}</h2>
        <p className="text-xs text-[#666]">
          Created At: {todoOptimistic.createdAt.toDateString()}
        </p>
      </div>
    </article>
  );
}
