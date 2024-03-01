import React from "react";
import "./Products.css";
import ItemCard from "../../../components/ItemCard/ItemCard";
import { useSelector } from "react-redux";
import { data } from "../../../data";

function Products() {
  const filteredItems = useSelector((state) => state.filteredItems);
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);
  return (
    <>
      <div className="products-container">
        {filteredItems && filteredItems.length > 0
          ? filteredItems?.map((model, i) => (
              <div key={i}>
                <ItemCard model={model} />
              </div>
            ))
          : data[selectedMenuItem]?.models.map((model, i) => (
              <div key={i}>
                <ItemCard model={model} />
              </div>
            ))}
      </div>
    </>
  );
}

export default Products;
