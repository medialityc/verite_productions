"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslationClient } from "../../../locales/client";
import Layout from "../../layout/Layout";

const swiperOptions = {
  modules: [Pagination, Navigation],
  spaceBetween: 0,
  speed: 1500,
  loop: true,
  navigation: {
    nextEl: ".cmn-prev",
    prevEl: ".cmn-next",
  },

  breakpoints: {
    1199: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const images = [
  "/assets/img/International/CCTV CUMBRE.jpg",
  "/assets/img/International/CCTV.ARCANGEL17.JPG",
  "/assets/img/International/CCTV.HYBRID2.JPG",
  "/assets/img/International/CCTV.JPG",
  "/assets/img/International/CCTV.LOMBANA24.5.jpg",
  "/assets/img/International/CCTV.LOMBANA24.15.JPG",
  "/assets/img/International/CCTV.MULINO.TDP..JPG",
  "/assets/img/International/CONCERT.RD.JPG",
  "/assets/img/International/DEBATES2024.CHIRIQUI6.jpg",
  "/assets/img/International/DEBATES2024.CHIRIQUI11.jpg",
  "/assets/img/International/GOBIERNO.CCTV.JPG",
  "/assets/img/International/GOBIERNO.IMAG2.jpg",
  "/assets/img/International/GOBIERNO.IMAGJPG.JPG",
  "/assets/img/International/GOBIERNO5.jpg",
  "/assets/img/International/HYBRID NESTLE.JPG",
  "/assets/img/International/HYBRID.ESTUDIO.JPG",
  "/assets/img/International/HYBRID.STUDIO.JPG",
];

export default function InternationalServices() {
  const { t } = useTranslationClient();
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle={t("international-services.title")}
      >
        <section className="Service-details pt-space pb-space">
          <div className="container">
            <div className="swiper study-slidewrap py-xxl-15 py-xl-10 py-9">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="study-thumb-slide w-100">
                      <img
                        src={image}
                        alt="img"
                        className="w-100"
                        style={{ borderRadius: "20px", height: "650px" }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="slider-button d-flex align-items-center justify-content-between py-xxl-6 py-xl-5 py-4">
              <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                <button
                  className="cmn-prev cmn-border d-center"
                  tabIndex={0}
                  aria-label="Next slide"
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <span className="fw-bold white-clr previus-text text-capitalize">
                  previous
                </span>
              </div>
              <h3 className="project-storke">Services</h3>
              <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                <span className="fw-bold white-clr previus-text text-capitalize">
                  Next
                </span>
                <button
                  className="cmn-next cmn-border d-center"
                  tabIndex={0}
                  aria-label="Previous slide"
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
