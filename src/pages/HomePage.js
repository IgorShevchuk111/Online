import React, { useEffect, useState } from "react";
import GalleryCarousel from "../components/GalleryCarousel";
import { data } from "../data";

function HomePage() {
  const smartPhones = data.smartPhones.models;
  const laptops = data.laptops.models;
  const imageUrls = [
    "https://images.ctfassets.net/mmeshd7gafk1/7KNLXyQymHYYkmyLiDbbwN/b4a2d7a9ddb37e38b45d11fd9a070f0a/TRADEIN_HP_GENERICBANNERS_DESKTOP_1_UK.jpg",
    "https://images.ctfassets.net/mmeshd7gafk1/1mklc1XS5bIPxK0yRUSWlC/38ddeaf73378f38400bfda50f76d3760/HP_Desktop.jpg",
    "https://images.ctfassets.net/mmeshd7gafk1/79rdnKQoRxpSz5XweedLXe/ae73600c79066d5667e32f16009dbf08/banner_hp_en-uk_desktop_2880_hdpi.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [imageUrls.length]);
  return (
    <>
      <div>
        <div className="text-center py-3" style={{ background: "#ABF7ED" }}>
          <span className="small-text">
            Trade tech you don't want for cash you do.{" "}
          </span>
          <span className="text-decoration-underline">Get started</span>
        </div>
        <img
          width="100%"
          alt="Trade-In"
          src={imageUrls[currentImageIndex]}
        ></img>
      </div>
      <div className="main-page">
        <div style={{ padding: " 20px " }}>
          <div style={{ margin: "0 0 50px 0" }}>
            <h5 className="text-center">Most wanted</h5>
            <GalleryCarousel smartPhones={smartPhones} />
          </div>
          <div>
            <h5 className="text-center">Most popular</h5>
            <GalleryCarousel laptops={laptops} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
