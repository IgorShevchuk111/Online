import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import Menu from "./MenuComponents/Menu";

function Header() {
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
      <NavBar />
      {screenSize > 1200 && (
        <>
          <Menu />
        </>
      )}
    </div>
  );
}

export default Header;
