import React from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-2 body-2">
        <div>AboutUs</div>
        <div>Help</div>
      </div>
      <div className="flex-3  ">
        <input placeholder="What are you looking for?"></input>
      </div>

      <div className="flex-4 body-2">
        <Link className="login" to="login">
          <div>Login</div>
        </Link>
        <div>Basket</div>
      </div>
    </div>
  );
}

export default NavBar;
