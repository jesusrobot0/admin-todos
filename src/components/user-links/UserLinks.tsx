import { LinkItem } from "..";

const menuLinks = [
  {
    path: "/dashboard",
    title: "Home",
  },
  {
    path: "/dashboard/rest-todos",
    title: "Todos",
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
