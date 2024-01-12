import React, { useEffect, useState } from "react";
import Item from "../item-component/Item";
import { data } from "../../../../data";
import { useSelector } from "react-redux";
import "./MenuSeeAllItems.css";
import RangeSlider from "../../../multiRangeSliderComponent/RangeSlider";
import MenuSearchComponent from "../../../menuSearchComponent/MenuSearchComponent";

function MenuSeeAllItems() {
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);
  const [selectedMenu, setSelectedMenu] = useState([]);

  useEffect(() => {
    const newSelectedMenu = Object.keys(data)
      .filter((key) => key === selectedMenuItem)
      .map((key) => data[key].models)
      .flat();
    setSelectedMenu(newSelectedMenu);
  }, [selectedMenuItem]);

  return (
    <div className="items-container">
      <div className="container-search">
        <div>
          <p>Price</p>
          <RangeSlider />
        </div>
        <MenuSearchComponent
          brands={[...new Set(selectedMenu.map((brand) => brand.brand))]}
          title={"Brand"}
        />
        <MenuSearchComponent
          models={[...new Set(selectedMenu.map((model) => model.model))]}
          title={"Model"}
        />
        <MenuSearchComponent
          colors={[...new Set(selectedMenu.flatMap((item) => item.color))]}
          title={"Color"}
        />
      </div>
      <div className="items-wraper">
        {selectedMenu.map((model, i) => (
          <div key={i} className="flex-item">
            <Item items={model} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSeeAllItems;
