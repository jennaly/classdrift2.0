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
      <Icon url={"/icons/star.png"} />
      <Icon url={"/icons/dialogue.png"} />
      <Icon url={"/icons/basket.png"} />
      <Icon url={"/icons/award.png"} />
    </div>
  );
};

export default Icons;
