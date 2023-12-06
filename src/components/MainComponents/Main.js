import React, { useContext } from "react";
import "./main.css";
import ShowItem from "./showItem/ShowItem";
import { AppContext } from "../../App";
import GalleryCarousel from "../galleryCarousel/GalleryCarousel";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Main() {
  const showItem = useContext(AppContext).showItem;
  const location = useLocation();
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];
  return (
    <div className="main">
      {location.pathname === "/" && (
        <div>
          <h5>Most wanted</h5>
          <GalleryCarousel images={images} />
          <h5>Most popular</h5>
          <GalleryCarousel images={images} />
          {showItem && <ShowItem />}
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Main;
