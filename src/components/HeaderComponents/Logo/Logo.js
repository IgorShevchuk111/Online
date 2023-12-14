import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Logo() {
  const dispatch = useDispatch();
  const navigatTohome = () => {
    dispatch({ type: "ADD_STATE_SELECTED_MENU", value: null });
  };
  return (
    <div>
      <Link className="logo" to="/" onClick={navigatTohome}>
        <h4 className="logo">My Shop</h4>
      </Link>
    </div>
  );
}

export default Logo;
