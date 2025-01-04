import React from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import "../Styles/Carousel.css";

const Hero = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={slide1}
              class="d-block w-100 carousel-image"
              alt="slide1"
            />
          </div>
          <div class="carousel-item">
            <img
              src={slide2}
              class="d-block w-100 carousel-image"
              alt="slide2"
            />
          </div>
          <div class="carousel-item">
            <img
              src={slide3}
              class="d-block w-100 carousel-image"
              alt="slide3"
            />
          </div>
          <div class="carousel-item">
            <img
              src={slide4}
              class="d-block w-100 carousel-image"
              alt="slide4"
            />
          </div>
        </div>
      </div>
      {/* <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel">
        <div class="carousel-inner"></div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
};

export default Hero;
