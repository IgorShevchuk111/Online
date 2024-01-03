import React from "react";
import "./Basket.css";
import Item from "../MenuComponents/item-component/Item";
import { useSelector } from "react-redux";

function Basket() {
  const selectedBasketItems = useSelector((state) => state.selectedBasketItems);
  return (
    <>
      {selectedBasketItems.length > 0 ? (
        <div className="basket-container">
          <Item selectedBasketItems={selectedBasketItems} />
          <Item summaryBasketItems={selectedBasketItems} />
        </div>
      ) : (
        <h5>There's nothing in your Basket</h5>
      )}
    </>
  );
}

export default Basket;
