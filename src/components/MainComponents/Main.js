import React from "react";
import "./main.css";
import GalleryCarousel from "../galleryCarousel/GalleryCarousel";
import { Outlet, useLocation } from "react-router-dom";
import { data } from "../../data";
import { useSelector } from "react-redux";

function Main() {
  const isMenuVisible = useSelector((state) => state.menuVisible);
  const location = useLocation();
  const images = data.smartPhones.models.flatMap((item) => item.img);
  return (
    <div
      className="main transition"
      style={isMenuVisible ? { background: "rgba(17, 17, 17, 0.5)" } : {}}
    >
      <div className="main-page">
        {location.pathname === "/" && (
          <div>
            <div style={{ margin: "0 0 50px 0" }}>
              <h5>Most wanted</h5>
              <GalleryCarousel images={images} />
            </div>
            <div>
              <h5>Most popular</h5>
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
