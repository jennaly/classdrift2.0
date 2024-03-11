import Link from "next/link";
import React from "react";
import { Button } from "./button";
import Logo from "./logo";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative mt-6">
      <div className="flex justify-between items-baseline font-medium">
        <div className="flex gap-1">
          <Logo />
          <span className="text-classdrift-gray-100">[BETA]</span>
        </div>

        <div className="flex gap-4 items-baseline">
          <Link href="/login">
            <span className="">Login</span>
          </Link>
          <Button className="bg-classdrift-accent">Try for free</Button>
        </div>
      </div>
      <Image
        src={"/icons/Arrow.png"}
        width={100}
        height={100}
        alt={"Icon of an arrow"}
        className="absolute right-24 mt-8"
      />
    </div>
  );
};

export default Header;
