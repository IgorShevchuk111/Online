import React, { useContext } from "react";
import "./main.css";
import ShowItem from "./showItem/ShowItem";
import { AppContext } from "../../App";
import GalleryCarousel from "../galleryCarousel/GalleryCarousel";

function Main() {
  const showItem = useContext(AppContext).showItem;
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
      <h5>Most wanted</h5>
      <GalleryCarousel images={images} />
      <h5>Most popular</h5>
      <GalleryCarousel images={images} />
      {showItem && <ShowItem />}
    </div>
  );
}

export default Main;
