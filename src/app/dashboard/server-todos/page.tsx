export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { TitlePage } from "@/components";
import { NewTodo, TodosGrid } from "@/todos/components";

export const metadata = {
  title: "TODOS",
  description: "TODOS",
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  // useEffect(() => {
  //   fetch("/api/todos")
  //     .then((response) => response.json())
  //     .then(console.log);
  // }, []);

  return (
    <>
      <TitlePage
        title="Todos"
        description="Todos Page taking Todos data from server actions"
      />
      <main>
        <NewTodo />
        <TodosGrid todos={todos} />
      </main>
    </>
  );
}
