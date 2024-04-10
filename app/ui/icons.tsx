import React from "react";
import Image from "next/image";

type Props = {
  url: string;
};
const Icon = ({ url }: Props) => {
  return (
    <Image
      src={url}
      width={20}
      height={20}
      sizes="100vw"
      alt={`${url.split("/")[2].split(".")[0]} icon`}
    />
  );
};

const Icons = () => {
  return (
    <div className="flex gap-2">
      <Icon url={"/icons/Star.png"} />
      <Icon url={"/icons/Dialogue.png"} />
      <Icon url={"/icons/Basket.png"} />
      <Icon url={"/icons/Award.png"} />
    </div>
  );
};

export default Icons;
