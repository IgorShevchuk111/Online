import React, { useState } from "react";
import "./Menu.css";
import { data } from "../../../data";
import { Link } from "react-router-dom";

function Menu({ updateSelectedMenuItem }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleSelectedMenuItem = (item) => {
    updateSelectedMenuItem(item);
    toggleMenu();
  };

  return (
    <div className="menu-container body-2">
      <div className=" material-icons" onClick={toggleMenu}>
        {menuVisible ? "close" : "menu"}
      </div>
      {menuVisible && (
        <div className="menu-items">
          {data.map((item, index) => (
            <p key={index} onClick={() => toggleSelectedMenuItem(item.type)}>
              <Link to={`allItems/${item.type}`}>{item.type}</Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
