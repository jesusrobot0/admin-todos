import { Todo } from "@prisma/client";

export async function updateTodo(id: string, complete: boolean): Promise<Todo> {
  const body = JSON.stringify({ complete });

  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  console.log(todo);

  return todo;
}
