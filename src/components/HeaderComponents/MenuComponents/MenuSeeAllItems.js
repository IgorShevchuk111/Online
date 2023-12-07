import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import { phones } from "../../../header-data/menuData";

function MenuSeeAllItems() {
  return (
    <div className="items-container">
      <div className="items-nav">
        List Items
        <Link to={"/"}>
          <p>Back</p>
        </Link>
      </div>
      <div className="items-wraper">
        {phones.map((item, index) => (
          <div key={index}>
            <Item items={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSeeAllItems;
