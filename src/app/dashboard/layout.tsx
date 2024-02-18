import { Navbar } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1200px] w-[92%] mx-auto">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
