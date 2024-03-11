import React from "react";
import Image from "next/image";

type Props = {
  url: string;
};
const Member = ({ url }: Props) => {
  return (
    <div>
      <Image
        src={url}
        height={25}
        width={25}
        sizes="100vw"
        className="w-full h-6"
        alt={`Image of a community member`}
      />
    </div>
  );
};

const Members = () => {
  return (
    <div className="flex items-stretch">
      <Member url={"/community/Member-1.png"} />
      <Member url={"/community/Member-2.png"} />
      <Member url={"/community/Member-3.png"} />
    </div>
  );
};

export default Members;
