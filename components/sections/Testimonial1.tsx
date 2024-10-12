"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslationClient } from "../../locales/client";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".cmn-prev",
    prevEl: ".cmn-next",
  },

  breakpoints: {
    1199: {
      slidesPerView: 1,
    },
  },
};

export default function Testimonial1() {
  const { t } = useTranslationClient();
  return (
    <>
      <section className="testimonial-version01-section pt-20 pb-space position-relative">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-11">
              <div className="swiper testimonial-version01 position-relative">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                      <div className="thumb">
                        <img
                          src="/assets/img/testimonial/images.png"
                          alt="img"
                        />
                      </div>
                      {/* <div className="vector d-md-block d-none">
                        <img
                          src="/assets/img/testimonial/vector01.png"
                          alt="img"
                        />
                      </div> */}
                      <div className="content ps-md-10">
                        <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                          <i className="fas fa-quote-right theme-clr" />
                        </div>
                        <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                          {t("testimonials.customer1.text")}
                        </p>
                        <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                          {t("testimonials.customer1.company")}
                        </p>
                        <div className="desig">
                          <h6 className="white-clr mb-2">Patricia Vallarino</h6>
                          <span className="theme-clr">
                            {t("testimonials.customer1.role")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                      <div className="thumb">
                        <img
                          src="/assets/img/testimonial/download.jpeg"
                          alt="img"
                        />
                      </div>
                      {/* <div className="vector d-md-block d-none">
                        <img
                          src="/assets/img/testimonial/vector01.png"
                          alt="img"
                        />
                      </div> */}
                      <div className="content ps-md-10">
                        <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                          <i className="fas fa-quote-right theme-clr" />
                        </div>
                        <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                          {t("testimonials.customer2.text")}
                        </p>
                        <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                          {t("testimonials.customer2.company")}
                        </p>
                        <div className="desig">
                          <h6 className="white-clr mb-2">Alejandro Aleman</h6>
                          <span className="theme-clr">
                            {t("testimonials.customer2.role")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                      <div className="thumb">
                        <img
                          src="/assets/img/testimonial/download (1).jpeg"
                          alt="img"
                        />
                      </div>
                      {/* <div className="vector d-md-block d-none">
                        <img
                          src="/assets/img/testimonial/vector01.png"
                          alt="img"
                        />
                      </div> */}
                      <div className="content ps-md-10">
                        <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                          <i className="fas fa-quote-right theme-clr" />
                        </div>
                        <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                          {t("testimonials.customer3.text")}
                        </p>
                        <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                          {t("testimonials.customer3.company")}
                        </p>
                        <div className="desig">
                          <h6 className="white-clr mb-2">Frank Pereira</h6>
                          <span className="theme-clr">
                            {t("testimonials.customer3.role")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-button gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
          <button
            className="cmn-prev cmn-border d-center"
            tabIndex={0}
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-up" />
          </button>
          <button
            className="cmn-next cmn-border d-center"
            tabIndex={0}
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-down" />
          </button>
        </div>
      </section>
    </>
  );
}
