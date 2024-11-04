"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslationClient } from "../../../locales/client";
import Layout from "../../layout/Layout";

const swiperOptions = {
  modules: [Pagination, Navigation],
  spaceBetween: 0,
  speed: 1500,
  loop: true,
  navigation: {
    nextEl: ".cmn-next",
    prevEl: ".cmn-prev",
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
export default function ServiceDetails() {
  const { t } = useTranslationClient();
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle={t("studio.title")}
      >
        <section className="Service-details pt-space pb-space">
          <div className="container">
            <h3>{t("studio.title")}</h3>
            <br />
            <div
              style={{ fontSize: "24px", fontWeight: "400" }}
              dangerouslySetInnerHTML={{
                __html: t("studio.formated-text").replace(/\n/g, "<br>"),
              }}
            />
            <br />
            <div className="case-study-detials-inner ">
              <h3 className="mb-xxl-7  white-clr">{t("studio.plans")}</h3>
            </div>
            <br />
            <div className="swiper study-slidewrap pb-xxl-15 pb-xl-10 pb-9">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                <SwiperSlide>
                  <div className="study-thumb-slide w-100">
                    <img
                      src="\assets\img\studio\planos1.PNG"
                      alt="img"
                      className="w-100"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="study-thumb-slide w-100">
                    <img
                      src="\assets\img\studio\planos2.PNG"
                      alt="img"
                      className="w-100"
                    />
                  </div>
                </SwiperSlide>
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
