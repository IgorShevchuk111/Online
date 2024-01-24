import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import { useDispatch } from "react-redux";
import AboutUs from "../AboutUs";
import Help from "../Help";
import Search from "../search-component/Search";
import Person from "../person-component/Person";
import Basket from "../basket/Basket";
import Menu from "../MenuComponents/Menu";

function NavBar() {
  const dispatch = useDispatch();
  const [isDarkMode, setDarkMode] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const screenSize = windowWidth;
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const darkMode = () => {
    setDarkMode((prev) => !prev);
  };
  useEffect(() => {
    dispatch({ type: "ADD_STATE_DARK_MODE", value: isDarkMode });
  }, [dispatch, isDarkMode]);

  return (
    <div
      className={`container-fluid py-3  ${isDarkMode ? "dark" : ""}`}
      style={{ background: "var(--light-color)" }}
    >
      <div className="row align-items-center">
        {screenSize < 1200 && (
          <div className="col-2  col-sm-2 menu d-flex justify-content-center">
            <Menu mobileMenu={"mobileMenu"} screenSize={screenSize} />
          </div>
        )}
        <div className="col-5 col-sm-7 col-xl-2 logo">
          <Logo />
        </div>
        {screenSize > 1200 && (
          <div className="col-xl-2 d-flex  small-text  about-help">
            <AboutUs />
            <Help />
          </div>
        )}
        <div className="col-12 col-sm-12 col-xl-6 search">
          <Search
            screenSize={screenSize}
            mobileSearch={"mobileSearch"}
            mobileInputSvg={"mobileInputSvg"}
            inputSvg={"inputSvg"}
          />
        </div>

        <div className="col-5 col-sm-3 col-xl-2  d-flex justify-content-evenly align-items-center body-2   person-basket-toggler">
          <Person />
          <Basket />
          <div
            className={`toggler-slider ${isDarkMode ? "toggled" : ""}`}
            onClick={darkMode}
          >
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
