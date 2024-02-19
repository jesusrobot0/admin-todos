import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import * as yup from "yup";

interface Segments {
  params: {
    id: string;
  };
}

const putSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
});

async function getTodo(id: string): Promise<Todo | null> {
  const todo = await prisma.todo.findFirst({ where: { id } });

  return todo;
}

export async function GET(request: Request, { params: { id } }: Segments) {
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `Todo with ${id} not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}

export async function PUT(request: Request, { params: { id } }: Segments) {
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `Todo with ${id} not found` },
      { status: 404 }
    );
  }

  try {
    const { description, complete } = await putSchema.validate(
      await request.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: {
        description,
        complete,
      },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(request: Request, { params: { id } }: Segments) {
  try {
    const todo = await prisma.todo.delete({ where: { id } });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
