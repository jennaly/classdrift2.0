import React from "react";
import { spaceGrotesk } from "../fonts/fonts";

const Logo = () => {
  return (
    <div>
      <span
        className={`tracking-tight ${spaceGrotesk.className} font-semibold`}
      >
        classdrift
      </span>
    </div>
  );
};

export default Logo;
