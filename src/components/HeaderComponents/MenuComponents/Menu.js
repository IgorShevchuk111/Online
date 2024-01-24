import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Menu.css";
import { data } from "../../../data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Menu() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const dispatch = useDispatch();

  const toggleMenu = useCallback(() => {
    const updatedMenuVisible = !menuVisible;
    setMenuVisible(!menuVisible);
    dispatch({ type: "ADD_STATE_MENU_VISIBLE", value: updatedMenuVisible });
  }, [dispatch, menuVisible]);

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
  // Click outside x to close menu
  const containerRef = useRef();
  const handleBlur = useCallback(() => {
    toggleMenu();
  }, [toggleMenu]);
  const handleDocumentClick = useCallback(
    (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        handleBlur();
      }
    },
    [handleBlur]
  );
  useEffect(() => {
    if (menuVisible) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [menuVisible, handleDocumentClick]);

  return (
    <div
      className="menu-container d-flex align-items-center position-relative py-2 px-4 body-2"
      ref={containerRef}
    >
      <div className=" material-icons cursor-pointer" onClick={toggleMenu}>
        {menuVisible ? "close" : "menu"}
      </div>
      {menuVisible && (
        <div className={`menu-items ${isDarkMode ? "dark" : ""}`}>
          {Object.keys(data).map((key, i) => (
            <Link
              to={`allItems/${key}`}
              className={`link ${isDarkMode ? "dark" : ""}`}
              style={isDarkMode ? { border: "none" } : {}}
              key={i}
              onClick={() => toggleSelectedMenuItem(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
