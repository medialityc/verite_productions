"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const images = [
  "/assets/img/banner-photos/playa, palmeras, Bocas.JPG",
  "/assets/img/banner-photos/zona bancaria.JPG",
  "/assets/img/banner-photos/Santa Catalina.JPG",
  "/assets/img/banner-photos/Mariposa.JPG",
  "/assets/img/banner-photos/amanecer.JPG",
];
function HeroCarousel() {
  const swiperOptions = {
    modules: [Autoplay],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1199: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <Swiper {...swiperOptions} className="custom-carousel-banner">
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="slide-banner">
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroCarousel;
