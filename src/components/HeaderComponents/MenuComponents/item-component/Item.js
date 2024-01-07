import React, { useState } from "react";
import "../Menu.css";
import "./Item.css";
import { useDispatch } from "react-redux";

function Item(props) {
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const addToBasket = () => {
    const item = { ...props.items, quantity: selectedQuantity };
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
          <div className="relative">
            <select
              className="quantity-items appearance-none outline-none"
              id="quantity"
              name="quantity"
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity) => (
                <option key={quantity} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="24"
              viewBox="0 0 48 48"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-quantity absolute pointer-events-none"
            >
              <path d="M24 29.51a1 1 0 01-.71-.29l-9-9a1 1 0 010-1.42 1 1 0 011.41 0l8.3 8.3 8.32-8.32a1 1 0 011.41 0 1 1 0 010 1.42l-9 9a1 1 0 01-.73.31Z"></path>
            </svg>
          </div>
          <button onClick={addToBasket}>Add to card</button>
        </div>
      )}
    </div>
  );
}

export default Item;
