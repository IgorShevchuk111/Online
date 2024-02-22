import React from "react";
import "./Products.css";
import ItemCard from "../../../components/ItemCard";

function Products({ selectedMenu }) {
  return (
    <>
      <div className="products-container">
        {selectedMenu.map((model, i) => (
          <div key={i} className="flex-item">
            <ItemCard model={model} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
