import React, { useEffect, useState } from "react";
import ItemCard from "../components/item-card/ItemCard";
import { data } from "../data";
import { useSelector } from "react-redux";
import "./ProductListPage.css";
import RangeSlider from "../components/multiRangeSliderComponent/RangeSlider";
import MenuSearchComponent from "../components/menuSearchComponent/MenuSearchComponent";

function ProductListPage() {
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
    <>
      <div className="items-container">
        <div className="container-search">
          <div>
            <h6>Price</h6>
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
              <ItemCard model={model} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductListPage;
