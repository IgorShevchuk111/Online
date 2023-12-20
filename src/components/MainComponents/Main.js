import React from "react";
import "./main.css";
import GalleryCarousel from "../galleryCarousel/GalleryCarousel";
import { Routes, Route } from "react-router-dom";
import MenuSeeAllItems from "../HeaderComponents/MenuComponents/MenuSeeAllItems";
import { data } from "../../data";
import Login from "../HeaderComponents/Login";

function Main() {
  const images = data
    .flatMap((item) =>
      item.brands.flatMap((brand) => brand.models.map((model) => model.img))
    )
    .filter((image) => image !== undefined && image !== null);
  return (
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h5>Most wanted</h5>
              <GalleryCarousel images={images} />
              <h5>Most popular</h5>
              <GalleryCarousel images={images} />
            </div>
          }
        />
        <Route path="allItems/:id" element={<MenuSeeAllItems />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Main;
