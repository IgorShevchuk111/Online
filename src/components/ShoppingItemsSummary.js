import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function ShoppingItemsSummary() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const selectedBasketItems = useSelector((state) => state.selectedBasketItems);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (selectedBasketItems && selectedBasketItems.length > 0) {
      const newTotalPrice = selectedBasketItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalPrice(newTotalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [selectedBasketItems]);
  return (
    <div className={`item-container-summary ${isDarkMode ? "dark" : ""}`}>
      <h5> Summary</h5>
      {selectedBasketItems && (
        <div
          className="summary-container"
          style={
            isDarkMode ? { border: "1px solid white", background: "black" } : {}
          }
        >
          {selectedBasketItems.map((item, index) => (
            <div key={index} className=" mb-3">
              <div className="d-flex">
                <div className="position-relative">
                  <img className="shopping-img" src={item.img} alt="foto" />
                  {item.quantity > 1 && (
                    <div className="position-absolute quantity-summary-num">
                      {item.quantity}
                    </div>
                  )}
                </div>
                <div className="width-100">
                  <div className="justify-content-between d-flex">
                    <div>{item.model}</div>
                    <div>{item.price} £</div>
                  </div>
                  <div className="justify-content-between d-flex">
                    <small className="margin-top-10">Shipping</small>
                    <small className="margin-top-10">Free</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between">
            <small>Total</small>
            <small>{totalPrice} £</small>
          </div>
          <button
            className="checkout-button"
            style={isDarkMode ? { border: "1px solid white" } : {}}
          >
            Checkout
          </button>
          <div className="small-text flex flex-center">
            <img
              className="padlock "
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

export default ShoppingItemsSummary;
