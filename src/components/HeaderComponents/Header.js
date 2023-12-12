import React from "react";
import NavBar from "./NavBar/NavBar";
import Menu from "./MenuComponents/Menu";

function Header({ updateSelectedMenuItem }) {
  return (
    <div>
      <NavBar />
      <Menu updateSelectedMenuItem={updateSelectedMenuItem} />
    </div>
  );
}

export default Header;
