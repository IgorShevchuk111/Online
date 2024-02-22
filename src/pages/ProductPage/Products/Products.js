import React from "react";
import "./Products.css";
import ItemCard from "../../../components/ItemCard/ItemCard";

function Products({ selectedMenu }) {
  return (
    <>
      <div className="products-container">
        {selectedMenu.map((model, i) => (
          <div key={i}>
            <ItemCard model={model} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
