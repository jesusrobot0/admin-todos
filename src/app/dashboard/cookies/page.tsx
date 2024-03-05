import { cookies } from "next/headers";
import { TabBar, TitlePage } from "@/components";

export const metadata = {
  title: "Cookies page",
  description: "SEO Title",
};

export default function CookiesPage() {
  const cookieStore = cookies();
  const selectedTab = Number(cookieStore.get("selectedTab")?.value ?? 1);
  console.log(selectedTab);

  return (
    <>
      <TitlePage title="Cookies" description="" />
      <TabBar currentTab={selectedTab} />
    </>
  );
}
