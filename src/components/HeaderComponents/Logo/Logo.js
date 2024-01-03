import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Logo() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <div>
      <Link className="logo" to="/">
        <h4 className={`logo ${isDarkMode ? "dark" : ""}`}>My Shop</h4>
      </Link>
    </div>
  );
}

export default Logo;
