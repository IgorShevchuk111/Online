import React from "react";
import "./main.css";
import GalleryCarousel from "../galleryCarousel/GalleryCarousel";
import { Routes, Route } from "react-router-dom";
import MenuSeeAllItems from "../HeaderComponents/MenuComponents/MenuSeeAllItems";
import { data } from "../../data";
import { useSelector } from "react-redux";

function Main() {
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);
  const images = data
    .flatMap((item) =>
      item.brands.flatMap((brand) => brand.models.map((model) => model.img))
    )
    .filter((image) => image !== undefined && image !== null);
  return (
    <div className="main">
      {!selectedMenuItem ? (
        <div>
          <h5>Most wanted</h5>
          <GalleryCarousel images={images} />
          <h5>Most popular</h5>
          <GalleryCarousel images={images} />
        </div>
      ) : (
        <Routes>
          <Route path="allItems/:id" element={<MenuSeeAllItems />} />
        </Routes>
      )}
    </div>
  );
}

export default Main;
