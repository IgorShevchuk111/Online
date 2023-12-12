import React, { useContext } from "react";
import "./main.css";
import GalleryCarousel from "../galleryCarousel/GalleryCarousel";
import { Routes, Route } from "react-router-dom";
import MenuSeeAllItems from "../HeaderComponents/MenuComponents/MenuSeeAllItems";
import { data } from "../../data";
import { SelectedMenuItemContexte } from "../../App";

function Main(props) {
  const selectedMenuItem = useContext(SelectedMenuItemContexte);
  const images = data
    .flatMap((category) =>
      category.brands.flatMap((brand) => brand.models.map((model) => model.img))
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
