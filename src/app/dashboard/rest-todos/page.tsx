import prisma from "@/lib/prisma";
import { TitlePage } from "@/components";
import { TodosGrid } from "@/todos/components";

export const metadata = {
  title: "TODOS",
  description: "TODOS",
};

export default async function RestTodosPage() {
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
        description="Todos page taking Todos data from an API Rest created in Next"
      />
      <main>
        <TodosGrid todos={todos} />
      </main>
    </>
  );
}
