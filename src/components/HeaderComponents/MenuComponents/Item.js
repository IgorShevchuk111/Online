import React from "react";
import "./Menu.css";

function Item(props) {
  return (
    <div className="item-container">
      <div>
        <img src={props.items.img} alt="foto" />
        <p>{props.items.brand}</p>
        <p>{props.items.model}</p>
        <p>{props.items.price}</p>
      </div>
    </div>
  );
}

export default Item;
