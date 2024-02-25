import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ItemCard from "./ItemCard/ItemCard";

const GalleryCarousel = ({ smartPhones, laptops }) => {
  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container-slider">
      <Slider {...settings}>
        {smartPhones &&
          smartPhones.map((smartPhoneModel, index) => (
            <div key={index}>
              <ItemCard model={smartPhoneModel} items={"smartPhones"} />
            </div>
          ))}
        {laptops &&
          laptops.map((laptopModel, index) => (
            <div key={index}>
              <ItemCard model={laptopModel} items={"laptops"} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default GalleryCarousel;
