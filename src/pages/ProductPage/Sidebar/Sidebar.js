import React from "react";
import Price from "./Price/Price";
import Brand from "./Brand/Brand";
import Model from "./Model/Model";
import Color from "./Color/Color";

function Sidebar() {
  return (
    <>
      <div>
        <Price />
        <Brand />
        <Model />
        <Color />
      </div>
    </>
  );
}

export default Sidebar;
