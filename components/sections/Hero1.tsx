"use server";
import VideoPopup from "../elements/VideoPopup";
import { useTranslationServer } from "../../locales/server";
import Protfolio1 from "./Protfolio1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import HeroCarousel from "./HeroCarousel";

export default async function Hero1() {
  const { t } = await useTranslationServer();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section className="text-section position-relative">
        <div className="container">
          <div className="row g-5">
            <div className="hero-v1-content position-relative">
              <div className="d-flex align-items-sm-center align-items-end justify-content-between">
                <h1 className="white-clr text-uppercase">
                  <span
                    className="d-block"
                    data-aos="zoom-in-left"
                    data-aos-duration={1800}
                    style={{ fontWeight: "500" }}
                  >
                    {t("weAre")}
                  </span>
                  <span className="text-banner text-uppercase">
                    <span
                      data-aos="zoom-in-right"
                      data-aos-duration={2200}
                      style={{ color: "#ef7f1a", fontWeight: "700" }}
                    >
                      VERITE Producciones
                    </span>
                  </span>
                </h1>
                <VideoPopup style={1} />
              </div>
              {/* <div className="hero-sponsor">
                <div className="sponsor-inner d-flex align-items-center gap-xxl-13 gap-xl-10 gap-lg-8 gap-md-6 gap-5 mb-xxl-10 mb-xl-7 mb-lg-6 mb-6">
                  <img
                    src="\assets\img\client\download (4).jpeg"
                    style={{ width: "168px", height: "53px" }}
                    alt="img"
                  />
                  <img
                    src="\assets\img\client\download (2).png"
                    style={{ width: "130px", height: "72px" }}
                    alt="img"
                  />
                  <img
                    src="\assets\img\testimonial\download.jpeg"
                    style={{ width: "168px", height: "53px" }}
                    alt="img"
                  />
                </div>
                <div className="brandin-wrap d-block">
                  <h4 className="white-clr brading-text">
                    1k + Brands Trust Us
                  </h4>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* Hero Exprience box */}
        {/* <div className="hero-expriencebox d-flex align-items-center">
          <div className="expri-thumb">
            <img src="/assets/img/banner/6.jpg" alt="img" />
          </div>
          <div className="expri-content d-flex align-items-center gap-xxl-11 gap-xl-9 gap-lg-7 gap-6">
            <div className="expri-cont-item">
              <h6 className="white-clr mb-2">22+</h6>
              <span className="yer spantext-clr">{t("yearsOfService")}</span>
            </div>
            <div className="expri-cont-item">
              <h6 className="white-clr mb-2">2200+</h6>
              <span className="yer spantext-clr">{t("completedProjects")}</span>
            </div>
          </div>
        </div> */}
        {/* Element */}
      </section>
      <HeroCarousel />
      {/* <div className="hero-section-version1 position-relative"></div> */}
    </div>
  );
}
