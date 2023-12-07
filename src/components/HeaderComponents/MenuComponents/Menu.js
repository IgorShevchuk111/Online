import React, { useState } from "react";
import "./Menu.css";
import MenuItems from "./MenuItems.js";
import { phones } from "../../../header-data/menuData.js";
import { laptops } from "../../../header-data/menuData.js";

function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="menu-container body-2">
      <div className=" material-icons" onClick={toggleMenu}>
        {menuVisible ? "close" : "menu"}
      </div>
      {menuVisible && (
        <div className="menu-items">
          <MenuItems name="Phones" items={phones} />
          <MenuItems name="Laptops" items={laptops} />
        </div>
      )}
    </div>
  );
}

export default Menu;
