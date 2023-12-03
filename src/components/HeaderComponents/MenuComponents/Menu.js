import React, { useState } from "react";
import "./Menu.css";
import Items from "./itemsComponent/Items.js";
import { phones } from "../../../header-data/menuData.js";
import { laptops } from "../../../header-data/menuData.js";

function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    // const mainContainer = document.querySelector(".main");
    // if (mainContainer) {
    //   mainContainer.classList.toggle("menu-open", !menuVisible);
    // }
  };

  return (
    <div className="menu-container body-2">
      <div className=" material-icons" onClick={toggleMenu}>
        {menuVisible ? "close" : "menu"}
      </div>
      {menuVisible && (
        <div className="menu-items">
          <Items name="Phones" items={phones} />
          <Items name="Laptops" items={laptops} />
        </div>
      )}
    </div>
  );
}

// s
export default Menu;
