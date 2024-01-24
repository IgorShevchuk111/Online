import React from "react";
import "./main.css";
import GalleryCarousel from "../galleryCarousel/GalleryCarousel";
import { Outlet, useLocation } from "react-router-dom";
import { data } from "../../data";

function Main() {
  const location = useLocation();
  const images = data.smartPhones.models.flatMap((item) => item.img);
  return (
    <div className="main transition">
      <div className="main-page">
        {location.pathname === "/" && (
          <div style={{ padding: " 20px " }}>
            <div style={{ margin: "0 0 50px 0" }}>
              <h5 className="text-center">Most wanted</h5>
              <GalleryCarousel images={images} />
            </div>
            <div>
              <h5 className="text-center">Most popular</h5>
              <GalleryCarousel images={images} />
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
