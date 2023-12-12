import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

function Logo({ updateSelectedMenuItem }) {
  const handleClick = () => {
    updateSelectedMenuItem(false);
  };
  return (
    <div>
      <Link className="logo" to="/" onClick={handleClick}>
        <h4 className="logo">My Shop</h4>
      </Link>
    </div>
  );
}

export default Logo;
