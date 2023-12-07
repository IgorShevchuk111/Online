import React from "react";
import "./main.css";
import GalleryCarousel from "../galleryCarousel/GalleryCarousel";
import { Routes, Route } from "react-router-dom";
import ListPhones from "../HeaderComponents/MenuComponents/itemsComponent/phones/ListPhones";
import Phone from "../HeaderComponents/MenuComponents/itemsComponent/phones/Phone";

function Main() {
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
        <Route path="apple-phones">
          <Route index element={<ListPhones />} />
          <Route path="phone" element={<Phone />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
