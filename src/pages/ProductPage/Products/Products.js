import React from "react";
import "./Products.css";
import ItemCard from "../../../components/ItemCard/ItemCard";
import { useSelector } from "react-redux";

function Products() {
  const selectedMenuCategory = useSelector(
    (state) => state.selectedMenuCategory
  );
  return (
    <>
      <div className="products-container">
        {selectedMenuCategory?.map((model, i) => (
          <div key={i}>
            <ItemCard model={model} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
