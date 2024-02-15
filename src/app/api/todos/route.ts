import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

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