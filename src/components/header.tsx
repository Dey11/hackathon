import Image from "next/image";
import Link from "next/link";

import { SignInButton, SignedOut } from "@clerk/nextjs";

import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex px-5 pt-10">
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between">
        <Image src={"/logo.svg"} alt="logo" width={70} height={48} />

        <div className="hidden gap-x-8 md:flex">
          {headerItems.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className="text-base font-semibold text-brand-muted md:text-2xl"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Button className="rounded-xl rounded-br-none border-2 border-brand-foreground bg-transparent text-base">
          <span className="size-1 bg-brand-foreground" /> Request a Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;

const headerItems = [
  {
    name: "Features",
    link: "/",
  },
  {
    name: "How it works",
    link: "/",
  },
  {
    name: "Connect us",
    link: "/",
  },
];
