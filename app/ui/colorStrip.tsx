import clsx from "clsx";
import React from "react";

const Color = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={clsx(" w-1/4 h-[10px]", className)}></div>;
};
const ColorStrip = () => {
  return (
    <div className="flex">
      <Color className="bg-classdrift-strip-purple" />
      <Color className="bg-classdrift-strip-pink" />
      <Color className="bg-classdrift-strip-green" />
      <Color className="bg-classdrift-strip-yellow" />
    </div>
  );
};

export default ColorStrip;
