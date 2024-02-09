import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import AboutUs from "../AboutUs";
import Help from "../Help";
import Search from "../search-component/Search";
import Person from "../person-component/Person";
import Basket from "../basket/Basket";
import Menu from "../MenuComponents/Menu";

function NavBar() {
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

  return (
    <div>
      <div
        className={`container-fluid py-3 px-4`}
        style={{ background: "var(--light-color)" }}
      >
        <div className="row  d-flex align-items-center">
          <div className="col-7 col-sm-6 col-xl-2 logo">
            <Logo />
          </div>
          {screenSize > 1200 && (
            <div className="col-xl-2 d-flex  small-text  about-help">
              <AboutUs />
              <Help />
            </div>
          )}
          <div className="col-12 col-sm-12 col-xl-6 search">
            <Search />
          </div>

          <div className="col-3 col-sm-3 col-xl-2  d-flex justify-content-end  body-2   person-basket-toggler">
            <Person />
            <Basket />
          </div>
          {screenSize < 1200 && (
            <div className="col-2 col-sm-3 col-xl-12 menu d-flex justify-content-start">
              <Menu screenSize={screenSize} />
            </div>
          )}
        </div>
      </div>
      {screenSize > 1200 && (
        <div className="py-2 px-4">
          <Menu />
        </div>
      )}
    </div>
  );
}

export default NavBar;
