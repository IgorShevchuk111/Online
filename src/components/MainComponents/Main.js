import React from "react";
import "./main.css";
import GalleryCarousel from "../galleryCarousel/GalleryCarousel";
import { Routes, Route } from "react-router-dom";
import MenuSeeAllItems from "../HeaderComponents/MenuComponents/MenuSeeAllItems";
import Item from "../HeaderComponents/MenuComponents/Item";
import { data } from "../../data";

function Main() {
  const images = data
    .flatMap((category) =>
      category.brands.flatMap((brand) => brand.models.map((model) => model.img))
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
        <Route path="see-all-Items-brands" element={<MenuSeeAllItems />} />
        <Route path="item">
          <Route path=":id" element={<Item />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
