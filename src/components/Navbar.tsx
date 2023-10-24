import { getAuthSession } from "@/lib/nextauth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/images/logo.svg";
type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  if (session?.user) {
    return <pre>{JSON.stringify(session.user, null, 2)}</pre>;
  } else {
    return (
      <div
        className="fixed inset-x-0 top-0 bg-white 
      dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2 "
      >
        <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
          <Link href={"/"}>
            <Image
              src={Logo}
              width={220}
              height={220}
              alt="YMA Logo"
              className="max-h-[150px] max-w-[150px] border border-red-600"
            />
          </Link>
        </div>
      </div>
    );
  }
};

export default Navbar;
