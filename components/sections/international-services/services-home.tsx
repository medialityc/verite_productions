"use client";
import React from "react";
import { useTranslationClient } from "../../../locales/client";
import Link from "next/link";

function ServicesHome() {
  const { t } = useTranslationClient();
  return (
    <section className="pt-space  section-bg">
      <div className="container">
        <div className="row g-6 justify-content-between">
          <div className="col-lg-6 pe-lg-14">
            <div className="d-flex gap-xxl-7 gap-xl-5 gap-4 position-relative z-index-1">
              <div
                className="about-small-thumb w-100"
                data-aos="zoom-in"
                data-aos-duration={1500}
              >
                <img
                  src="\assets\img\corporate\CORPORATE.WEF.JPG"
                  alt="img"
                  className="w-100"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div
                className="about-small-thumb w-100 mt-xxl-10 mt-xl-7 mt-lg-5 mt-3"
                data-aos="zoom-in"
                data-aos-duration={1800}
              >
                <img
                  src="\assets\international\CCTV.MULINO.TDP28.jpg"
                  alt="img"
                  className="w-100"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              {/*- About Arrow */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-samll-content">
              <div className="pricing-title">
                <h2
                  className="stitle d-flex align-items-center mb-xxl-8 mb-xl-7 mb-lg-6 mb-5 gap-xxl-7 gap-xl-5 gap-3"
                  data-aos="zoom-in-left"
                  data-aos-duration={1700}
                >
                  {t("international-services.title")}
                </h2>
                <div
                  data-aos-duration={1700}
                  data-aos="zoom-in-left"
                  style={{ paddingBottom: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("international-services.text").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <Link
                  href="/international-services"
                  className="radius-btn  d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2"
                >
                  {t("seeMore")}
                  <span className="rot60 d-inline-block">
                    <i className="fas fa-arrow-up theme-clr" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHome;
