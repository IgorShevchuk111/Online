import React from "react";
import "./main.css";
import GalleryCarousel from "../galleryCarousel/GalleryCarousel";
import { Outlet, useLocation } from "react-router-dom";
import { data } from "../../data";

function Main() {
  const location = useLocation();
  const images = data
    .flatMap((item) =>
      item.brands.flatMap((brand) => brand.models.map((model) => model.img))
    )
    .filter((image) => image !== undefined && image !== null);
  return (
    <div className="main">
      {location.pathname === "/" && (
        <div className="main-page">
          <h5>Most wanted</h5>
          <GalleryCarousel images={images} />
          <h5>Most popular</h5>
          <GalleryCarousel images={images} />
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Main;
