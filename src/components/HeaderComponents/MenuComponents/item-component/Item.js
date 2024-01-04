import React, { useState, useEffect } from "react";
import "../Menu.css";
import "./Item.css";
import { useDispatch } from "react-redux";

function Item(props) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (props.summaryBasketItems && props.summaryBasketItems.length > 0) {
      const newTotalPrice = props.summaryBasketItems.reduce(
        (total, item) => total + item.price,
        0
      );
      setTotalPrice(newTotalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [props.summaryBasketItems]);

  const dispatch = useDispatch();
  const addToBasket = () => {
    const item = props.items;
    dispatch({ type: "ADD_STATE_BASKET_ITEMS", value: item });
  };

  return (
    <div
      className={`item-container ${
        props.summaryBasketItems ? "item-container-summary" : ""
      }`}
    >
      {props.selectedBasketItems && (
        <div className="basket-wrap">
          <h5> Your Basket</h5>
          {props.selectedBasketItems.map((item, index) => (
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
      {props.items && (
        <div>
          <img src={props.items.img} alt="foto" />
          <p>{props.items.brand}</p>
          <p>{props.items.model}</p>
          <p>{props.items.price}</p>
          <button onClick={addToBasket}>Add to card</button>
        </div>
      )}
      <h5> Summary</h5>
      {props.summaryBasketItems && (
        <div className="summary-container">
          {props.summaryBasketItems.map((item, index) => (
            <div key={index} className="item-container-summary margin-top-20">
              <div className="flex">
                <img src={item.img} alt="foto" />
                <div className="width-100">
                  <div className="justify-between flex">
                    <div>{item.model}</div>
                    <div>{item.price} £</div>
                  </div>
                  <div className="justify-between flex">
                    <small className="margin-top-10">Shipping</small>
                    <small className="margin-top-10">Free</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <hr />
          <div className="flex justify-between">
            <small>Total</small>
            <small>{totalPrice} £</small>
          </div>
          <button className="checkout-button">Checkout</button>
          <div className="small-text flex flex-center">
            <img
              className="padlock"
              src="https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/985eb7dec3309df6df7ba38b18f96be580fdd87b/img/Lock.svg"
              alt="padlock"
            />
            Secure payment
          </div>
          <div className="small-text margin-top-20">
            <span data-test="legal-link">
              By confirming this order you accept our{" "}
              <a href="#">Terms of Use Agreement</a>
              <a href="#">Terms of Sale</a>, and our{" "}
              <a href="#">data protection policy</a>
            </span>
          </div>
          <div>
            <div className="margin-top-20">
              <img
                style={{ height: "20px", width: "36px" }}
                alt="Visa"
                src="https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/985eb7dec3309df6df7ba38b18f96be580fdd87b/img/payment/networks-v3/visa.svg"
              />
              <img
                style={{ height: "20px", width: "36px" }}
                alt="Mastercard"
                src="https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/985eb7dec3309df6df7ba38b18f96be580fdd87b/img/payment/networks-v3/mastercard.svg"
              />
              <img
                style={{ height: "20px", width: "36px" }}
                alt="PayPal"
                src="https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/985eb7dec3309df6df7ba38b18f96be580fdd87b/img/payment/methods-v3/paypal.svg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;
