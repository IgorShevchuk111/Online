import React, { useContext } from "react";
import "./main.css";
import ShowItem from "./showItem/ShowItem";
import { AppContext } from "../../App";

function Main() {
  const showItem = useContext(AppContext).showItem;
  return (
    <div className="main">
      Main
      {showItem && <ShowItem />}
    </div>
  );
}

export default Main;
