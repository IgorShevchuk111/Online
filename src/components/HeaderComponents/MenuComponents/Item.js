import React from "react";
import "./Menu.css";

function Item(props) {
  return (
    <div className="item-container">
      <img src={props.items.img} alt="foto" />
      <p>125 gb</p>
      <p>Price 345 £</p>
    </div>
  );
}

export default Item;
