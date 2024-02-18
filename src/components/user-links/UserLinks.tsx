import { LinkItem } from "..";

const menuLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/rest-todos",
    title: "Rest",
  },
  {
    path: "/dashboard/server-todos",
    title: "ServerActions",
  },
];

export function UserLinks() {
  return (
    <nav>
      <ul className="flex gap-2">
        {menuLinks.map((link) => (
          <LinkItem key={link.path} link={link} />
        ))}
      </ul>
    </nav>
  );
}
