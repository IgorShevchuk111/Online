import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./BasketItems.css";

function BasketItems() {
  const selectedBasketItems = useSelector((state) => state.selectedBasketItems);
  const dispatch = useDispatch();

  const deleteItem = (itemId) => {
    dispatch({ type: "DELETE_STATE_BASKET_ITEM", id: itemId });
  };
  return (
    <div>
      {selectedBasketItems && (
        <div className="container-basket">
          <h5> Your Basket</h5>
          {selectedBasketItems.map((item, index) => (
            <div key={index} className="basket-card flex  justify-between">
              <div className="flex">
                <img src={item.img} alt="foto" />
                <div>
                  <div>{item.model}</div>
                  <div>{item.price} £</div>
                </div>
              </div>
              <div className="relative">
                <select
                  className="quantity-items appearance-none outline-none"
                  id="quantity"
                  name="quantity"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
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
                <button
                  className="remove-button"
                  onClick={() => deleteItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BasketItems;
