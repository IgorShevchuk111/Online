import React from "react";
import Item from "../item-component/Item";
import { data } from "../../../../data";
import { useSelector } from "react-redux";
import "./MenuSeeAllItems.css";
import RangeSlider from "../../../multiRangeSliderComponent/RangeSlider";
import MenuSearchComponent from "../../../menuSearchComponent/MenuSearchComponent";

function MenuSeeAllItems() {
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);
  return (
    <div className="items-container">
      <div className="container-search">
        <div>
          <p>Price</p>
          <RangeSlider />
        </div>
        {data.map(
          (item, i) =>
            item.type === selectedMenuItem && (
              <MenuSearchComponent
                key={i}
                items={item.brands}
                title={"Brand"}
              />
            )
        )}

        {data.map(
          (item, i) =>
            item.type === selectedMenuItem && (
              <MenuSearchComponent
                key={i}
                models={item.brands.flatMap((brand) => brand.models)}
                title={"Model"}
              />
            )
        )}

        <MenuSearchComponent
          color={[
            ...new Set(
              data
                .filter((item) => item.type === selectedMenuItem)
                .flatMap((item) =>
                  item.brands.flatMap((brand) =>
                    brand.models.flatMap((model) => model.color)
                  )
                )
            ),
          ]}
          title={"Color"}
        />
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
