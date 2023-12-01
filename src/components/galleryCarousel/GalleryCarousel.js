import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./GalleryCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const GalleryCarousel = ({ images }) => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default GalleryCarousel;
