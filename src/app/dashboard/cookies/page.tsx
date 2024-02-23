import { TabBar, TitlePage } from "@/components";

export const metadata = {
  title: "Cookies page",
  description: "SEO Title",
};

export default function CookiesPage() {
  return (
    <>
      <TitlePage title="Cookies" description="" />
      <TabBar />
    </>
  );
}
