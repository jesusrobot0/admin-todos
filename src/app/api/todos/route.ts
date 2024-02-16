import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import * as yup from "yup";

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const skip = Number(searchParams.get("skip") ?? "0");
  const take = Number(searchParams.get("take") ?? "10");

  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Skip has to be a number" },
      { status: 400 }
    );
  }

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Take has to be a number" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({ skip, take });

  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  try {
    const { description, complete } = await postSchema.validate(
      await request.json()
    );

    const newTodo = await prisma.todo.create({
      data: { description, complete },
    });

    return NextResponse.json(newTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
