import React from "react";
import "../Menu.css";
import "./Item.css";
import { useDispatch } from "react-redux";

function Item(props) {
  const dispatch = useDispatch();
  const addToBasket = () => {
    const item = props.items;
    dispatch({ type: "ADD_STATE_BASKET_ITEMS", value: item });
  };

  return (
    <div>
      {props.items && (
        <div>
          <img src={props.items.img} alt="foto" />
          <p>{props.items.brand}</p>
          <p>{props.items.model}</p>
          <p>{props.items.price}</p>
          <button onClick={addToBasket}>Add to card</button>
        </div>
      )}
    </div>
  );
}

export default Item;
