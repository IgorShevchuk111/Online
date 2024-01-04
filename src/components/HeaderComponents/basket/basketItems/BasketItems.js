import React from "react";
import { useSelector } from "react-redux";

function BasketItems() {
  const selectedBasketItems = useSelector((state) => state.selectedBasketItems);
  return (
    <div>
      {selectedBasketItems && (
        <div className="basket-wrap">
          <h5> Your Basket</h5>
          {selectedBasketItems.map((item, index) => (
            <div key={index} className="basket-card">
              <div className="basket-card-item-1">
                <img src={item.img} alt="foto" />
                <div>
                  <div>Model: {item.model}</div>
                  <div>Price: {item.price} £</div>
                </div>
              </div>
              <div className="basket-card-item-2">
                <select id="quantity" name="quantity">
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
                <button>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BasketItems;
