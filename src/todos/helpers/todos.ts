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

  return todo;
}

export async function createTodo(description: string): Promise<Todo> {
  const body = JSON.stringify({ description });

  const todo = await fetch(`/api/todos`, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
}

export async function deleteAllCompleted() {
  const todos = await fetch("/api/todos", {
    method: "DELETE",
  });

  console.log(todos);

  return todos;
}
