import React from "react";
import Image from "next/image";
import Description from "./description";
import { Button } from "./button";

const BottomBanner = () => {
  return (
    <div className="bg-black mt-10 flex px-8 pt-10 pb-14 lg:px-14 lg:py-10 rounded-xl flex-col lg:flex-row justify-center">
      <Image
        src={"/icons/Board.png"}
        width={500}
        height={500}
        alt={"Doodle of a board"}
        className="p-10 mx-auto lg:mx-0"
      ></Image>
      <div className=" text-white px-4 lg:px-10 my-auto flex flex-col gap-2  mx-auto lg:mx-0">
        <p className="text-4xl lg:text-6xl font-medium ">
          Try it now,
          <span className="text-classdrift-gray-200"> it&apos;s free</span>
        </p>
        <Description className="mt-6">
          Streamline your messy teaching workflow and focus on what matters.
        </Description>

        <Button className="bg-classdrift-accent self-start">
          Launch your workspace
        </Button>
      </div>
    </div>
  );
};

export default BottomBanner;
