import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

interface Segments {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params: { id } }: Segments) {
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    return NextResponse.json(
      { message: `Todo with ${id} not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}
