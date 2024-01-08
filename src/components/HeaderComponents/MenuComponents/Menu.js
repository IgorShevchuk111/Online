import React, { useState, useEffect } from "react";
import "./Menu.css";
import { data } from "../../../data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Menu() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    const updatedMenuVisible = !menuVisible;
    setMenuVisible(!menuVisible);
    dispatch({ type: "ADD_STATE_MENU_VISIBLE", value: updatedMenuVisible });
  };

  const toggleSelectedMenuItem = (item) => {
    setSelectedMenuItem(item);
    toggleMenu();
  };

  useEffect(() => {
    if (selectedMenuItem !== null) {
      dispatch({
        type: "ADD_STATE_SELECTED_MENU",
        value: selectedMenuItem,
      });
    }
  }, [selectedMenuItem, dispatch]);

  return (
    <div className="menu-container body-2">
      <div className=" material-icons" onClick={toggleMenu}>
        {menuVisible ? "close" : "menu"}
      </div>
      {menuVisible && (
        <div className={`menu-items ${isDarkMode ? "dark" : ""}`}>
          {data.map((item) => (
            <p
              style={isDarkMode ? { border: "none" } : {}}
              className={isDarkMode ? "dark" : ""}
              key={item.type}
              onClick={() => toggleSelectedMenuItem(item.type)}
            >
              <Link
                to={`allItems/${item.type}`}
                className={isDarkMode ? "dark" : ""}
              >
                {item.type}
              </Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
