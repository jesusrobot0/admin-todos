import Image from "next/image";
import Link from "next/link";
import { UserActions, UserLinks } from "..";

export function Navbar() {
  return (
    <div className="py-6 flex justify-between items-center ">
      <Link href="/dashboard" className="">
        <Image
          src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
          alt="Tailus logo"
          width={120}
          height={75}
        />
      </Link>
      <UserLinks />
      <ul>
        <li>
          <UserActions />
        </li>
      </ul>
    </div>
  );
}
