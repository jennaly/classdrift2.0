import clsx from "clsx";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Description = ({ children, className }: Props) => {
  return (
    <p className={clsx("text-base font-normal mb-4", className)}>{children}</p>
  );
};

export default Description;
