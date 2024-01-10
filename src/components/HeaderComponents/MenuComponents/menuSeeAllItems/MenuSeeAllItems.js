import React from "react";
import Item from "../item-component/Item";
import { data } from "../../../../data";
import { useSelector } from "react-redux";
import "./MenuSeeAllItems.css";
import RangeSlider from "../../../multiRangeSlider/RangeSlider";

function MenuSeeAllItems() {
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);
  return (
    <div className="items-container">
      <div>
        <RangeSlider />
      </div>
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
