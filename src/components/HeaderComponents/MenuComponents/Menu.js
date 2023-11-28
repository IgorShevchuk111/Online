import React, { useState } from "react";
import "./Menu.css";
import { menu } from "../../../header-data/menuData.js";

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
          {menu.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
      )}
      {menu.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}

export default Menu;
