"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";

export async function sleep(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
}

export async function toggleTodo(id: string, complete: boolean): Promise<Todo> {
  await sleep(3);

  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw new Error(`Todo with ${id} not found`);
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
}

export async function addTodo(description: string) {
  try {
    const newTodo = await prisma.todo.create({
      data: { description },
    });
    revalidatePath("/dashboard/server-todos");
    return newTodo;
  } catch (error) {
    return { message: "Error creating a Todo" };
  }
}

export async function deleteCompleted(): Promise<void> {
  await prisma.todo.deleteMany({ where: { complete: true } });
  revalidatePath("/dashboard/server-todos");
}
