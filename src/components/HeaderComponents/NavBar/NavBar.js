import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();
  const [isDarkMode, setDarkMode] = useState(false);
  const darkMode = () => {
    setDarkMode((prev) => !prev);
  };
  useEffect(() => {
    dispatch({ type: "ADD_STATE_DARK_MODE", value: isDarkMode });
  }, [dispatch, isDarkMode]);

  const selectedBasketItems = useSelector((state) => state.selectedBasketItems);
  return (
    <div className={`nav ${isDarkMode ? "dark" : ""}`}>
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-2 small-text">
        <div>AboutUs</div>
        <div>Help</div>
      </div>
      <div className="flex-3  ">
        <input placeholder="What are you looking for?"></input>
      </div>

      <div className="flex-4 body-2">
        <Link className="login" to="login">
          <span className="material-symbols-outlined  person">person</span>
        </Link>
        <Link to="basket">
          <span
            className={`material-symbols-outlined basket ${
              selectedBasketItems.length > 0 ? "notEmpty" : ""
            }`}
          >
            shopping_bag
          </span>
        </Link>
        <div
          className={`toggler-slider ${isDarkMode ? "toggled" : ""}`}
          onClick={darkMode}
        >
          <div className="circle" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
