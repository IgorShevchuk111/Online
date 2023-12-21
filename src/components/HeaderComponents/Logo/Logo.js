import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link className="logo" to="/">
        <h4 className="logo">My Shop</h4>
      </Link>
    </div>
  );
}

export default Logo;
