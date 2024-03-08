import React from "react";
import "./Products.css";
import ItemCard from "../../../components/ItemCard/ItemCard";
import { useSelector } from "react-redux";

function Products() {
  const filteredItems = useSelector((state) => state.filteredItems);
  return (
    <>
      <div className="products-container">
        {filteredItems && filteredItems.length > 0
          ? filteredItems?.map((model, i) => (
              <div key={i}>
                <ItemCard model={model} />
              </div>
            ))
          : []}
      </div>
    </>
  );
}

export default Products;
