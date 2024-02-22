import React from "react";
import Price from "./Price/Price";
import Brand from "./Brand/Brand";
import Model from "./Model/Model";
import Color from "./Color/Color";

function Sidebar({ uniqueBrands, uniqueModel, uniqueColor }) {
  return (
    <>
      <div>
        <Price />
        <Brand uniqueBrands={uniqueBrands} />
        <Model uniqueModel={uniqueModel} />
        <Color uniqueColor={uniqueColor} />
      </div>
    </>
  );
}

export default Sidebar;
