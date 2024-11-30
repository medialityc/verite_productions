"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";
import Image from "next/image";
import Logo from "../layout/header/LogoNavbar";

const paginationOptions: PaginationOptions = {
  el: ".swiper-pagination",
  type: "fraction",
};

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: paginationOptions,

  breakpoints: {
    1199: {
      slidesPerView: 1,
    },
  },
};

export default function Protfolio1({ images }: { images: string[] }) {
  return (
    <>
      <section className="protfolio-solution pb-space">
        <div className="container">
          <div className="swiper protfolio-solutionwrap">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="protfolio-solution-item">
                    <div className="thumb position-relative mb-xxl-7 mb-5">
                      <Image
                        width={800}
                        height={100}
                        className="image-gallery h-100"
                        src={image}
                        alt="img"
                      />
                      {/* <Link href="/service" className="mission-v4-btn d-center">
                        <span className="rot60">
                          <i className="fa-solid fa-arrow-up" />
                        </span>
                      </Link> */}
                    </div>
                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                      <Logo />
                      <Link href="/service" className="cont">
                        <h4 className="white-clr">
                          Verite
                          <span className="d-block">Producciones</span>
                        </h4>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
    </>
  );
}
