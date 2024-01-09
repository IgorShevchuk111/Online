import React from "react";
import "./main.css";
import GalleryCarousel from "../galleryCarousel/GalleryCarousel";
import { Outlet, useLocation } from "react-router-dom";
import { data } from "../../data";
import { useSelector } from "react-redux";

function Main() {
  const isMenuVisible = useSelector((state) => state.menuVisible);
  const location = useLocation();
  const images = data
    .flatMap((item) =>
      item.brands.flatMap((brand) => brand.models.map((model) => model.img))
    )
    .filter((image) => image !== undefined && image !== null);
  return (
    <div
      className="main transition"
      style={isMenuVisible ? { background: "rgba(17, 17, 17, 0.5)" } : {}}
    >
      <div className="main-page">
        {location.pathname === "/" && (
          <div>
            <h5>Most wanted</h5>
            <GalleryCarousel images={images} />
            <h5>Most popular</h5>
            <GalleryCarousel images={images} />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
