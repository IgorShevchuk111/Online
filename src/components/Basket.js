import React from "react";
import { useSelector } from "react-redux";
import ShoppingItemsSummary from "./ShoppingItemsSummary";
import BasketItems from "./BasketItems";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

function Basket() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const selectedBasketItems = useSelector((state) => state.selectedBasketItems);
  const location = useLocation();
  const isMatchingRoute = location.pathname === "/basket";
  return (
    <>
      {!isMatchingRoute && (
        <div>
          <Link to="basket">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <span
                className={`material-symbols-outlined basket ${
                  selectedBasketItems.length > 0 ? "notEmpty" : ""
                }`}
              >
                shopping_bag
              </span>
              {selectedBasketItems.length > 0 && (
                <div
                  className="position-absolute number"
                  // style={{
                  //   color: "var(--primary-color)",
                  //   top: "-10px",
                  //   right: "-10px",
                  // }}
                >
                  {selectedBasketItems.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      )}
      {isMatchingRoute && (
        <div>
          <div className={`basket-logo ${isDarkMode ? "dark" : ""}`}>
            <Logo />
          </div>
          {selectedBasketItems.length > 0 ? (
            <div className="basket-container">
              <BasketItems />
              <ShoppingItemsSummary />
            </div>
          ) : (
            <div className="min-height-100vh">
              <h1 className="text-center mt-5">
                There's nothing in your Basket
              </h1>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Basket;
// top: -2px;
//     right: 0px;
//     font-size: 6px;
