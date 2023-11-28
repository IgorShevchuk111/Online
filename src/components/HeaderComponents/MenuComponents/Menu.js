import React, { useState } from "react";
import "./Menu.css";
import Phones from "./phonesComponents/Phones.js";
import Laptops from "./laptopsComponents/Laptops.js";
import TVs from "./tvComponents/TVs.js";

function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    const mainContainer = document.querySelector(".main");
    if (mainContainer) {
      mainContainer.classList.toggle("menu-open", !menuVisible);
    }
  };

  return (
    <div className="menu-container body-2">
      <div className=" material-icons" onClick={toggleMenu}>
        {menuVisible ? "close" : "menu"}
      </div>
      {menuVisible && (
        <div className="menu-items">
          <Phones />
          <Laptops />
          <TVs />
        </div>
      )}
    </div>
  );
}

export default Menu;
