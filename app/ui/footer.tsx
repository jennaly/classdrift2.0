import React from "react";
import Logo from "./logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="my-4 flex justify-between items-baseline font-normal text-classdrift-gray-200">
      <div className="flex gap-1">
        <span>@ 2022 </span>
        <Logo />
      </div>
      <div className="flex gap-4">
        <Link href={"/terms-of-service"}>Terms of Service</Link>
        <Link href={"/terms-of-service"}>Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
