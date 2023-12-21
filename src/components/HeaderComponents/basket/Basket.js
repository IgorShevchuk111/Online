import React from "react";
import "./Basket.css";
import Item from "../MenuComponents/item-component/Item";
import { useSelector } from "react-redux";

function Basket() {
  const selectedBasketItems = useSelector((state) => state.selectedBasketItems);
  return (
    <div className="basket-container">
      <Item selectedBasketItems={selectedBasketItems} />
      <div>Checkout</div>
    </div>
  );
}

export default Basket;
