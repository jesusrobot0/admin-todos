"use client";

import { Todo } from "@prisma/client";
import { TodoItem } from "..";
import * as todosApi from "@/todos/helpers/todos"; // Podemos importar asi o con un archivo de barril
import { useRouter } from "next/navigation";

interface Props {
  todos?: Todo[];
}
export function TodosGrid({ todos = [] }: Props) {
  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    const updatedTodo = await todosApi.updateTodo(id, complete);
    router.refresh();
  };

  return (
    <section className="flex flex-col gap-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </section>
  );
}
