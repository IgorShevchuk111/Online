import React, { useContext } from "react";
import Item from "./Item";
import { data } from "../../../data";
import { SelectedMenuItemContexte } from "../../../App";

function MenuSeeAllItems() {
  const selectedMenuItem = useContext(SelectedMenuItemContexte);
  return (
    <div className="items-container">
      <div className="items-wraper">
        {data.map((item) => {
          return (
            item.type === selectedMenuItem &&
            item.brands.map((item) =>
              item.models.map((item, index) => (
                <div key={index} className="flex-item">
                  <Item items={item} />
                </div>
              ))
            )
          );
        })}
      </div>
    </div>
  );
}

export default MenuSeeAllItems;
