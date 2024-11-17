"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslationClient } from "../../locales/client";

export default function Service1() {
  const [isAccordion, setIsAccordion] = useState(1);
  const { t } = useTranslationClient();
  const handleAccordion = (key: number) => {
    setIsAccordion((prevState) => (prevState === key ? 0 : key));
  };
  return (
    <>
      <section className="service-section pt-space pb-space">
        <div className="container position-relative">
          {/* <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
            <div className="pricing-title">
              <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                {t("whatWeOffer")}
              </div>
            </div>
            <Link
              href="/services"
              className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2"
            >
              {t("seeMore")}
              <span className="rot60 d-inline-block">
                <i className="fas fa-arrow-up theme-clr" />
              </span>
            </Link>
          </div> */}
          {/*Service Tabing section*/}
          <div className="row g-xxl-6 g-4">
            <div className="service-tabing-wrap Faqs-section">
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${
                  isAccordion === 1 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(1)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        01
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      {/* <span
                        style={{
                          border: "1px solid #ee7e1a",
                          borderRadius: "20px",
                          padding: "5px",
                          marginLeft: "20px",
                          backgroundColor: "#ee7e1a",
                        }}
                      >
                        {t("accordeon.international-production-services")}
                      </span> */}
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/international-services"
                          className="white-clr whitehover"
                        >
                          {t("accordeon.international-production-services")}
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4">
                        <div className="d-md-none d-block">
                          {t(
                            "accordeon.international-production-services-text"
                          )}
                        </div>
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        {t("accordeon.international-production-services-text")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${
                  isAccordion === 2 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(2)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        02
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/ob-mobile"
                          className="white-clr whitehover"
                        >
                          {t("accordeon.ob-units")}
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4">
                        <div className="d-md-none d-block">
                          {t("accordeon.ob-units")}
                        </div>
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        {t("accordeon.ob-units-text")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${
                  isAccordion === 3 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(3)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        03
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link href="/cctv" className="white-clr whitehover">
                          {t("accordeon.cctv-img")}
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        {t("accordeon.cctv-img-text")}
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      {/* <ul className="modern-list d-grid gap-2">
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" />{" "}
                          {t("services.movil")}
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Solution Design
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Technology
                          Enabling
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Mobile-First
                          Systems
                        </li>
                      </ul> */}
                      <div className="tab-remove-thumb">
                        <img src="\assets\img\element\1.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${
                  isAccordion === 4 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(4)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        04
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link href="/live" className="white-clr whitehover">
                          {t("accordeon.live-streaming")}
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        {t("accordeon.live-streaming-text")}
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <div className="tab-remove-thumb">
                        <img
                          width={350}
                          height={350}
                          src="\assets\img\element\7.jpg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${
                  isAccordion === 5 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(5)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        05
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/av-production"
                          className="white-clr whitehover"
                        >
                          {t("accordeon.av-productions")}
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4">
                        <div className="d-md-none d-block">
                          {t("accordeon.av-productions-text")}
                        </div>
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        {t("accordeon.av-productions-text")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${
                  isAccordion === 6 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(6)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        06
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/timelapse"
                          className="white-clr whitehover"
                        >
                          {t("accordeon.timelapse")}
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        {t("accordeon.timelapse-text")}
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <div className="tab-remove-thumb">
                        <img
                          width={500}
                          height={500}
                          src="\assets\img\element\timelapse_9718.jpg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${
                  isAccordion === 7 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(7)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        07
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link href="/studio" className="white-clr whitehover">
                          {t("accordeon.studio")}
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4">
                        <div className="d-md-none d-block">
                          {t("studio.text")}
                        </div>
                      </span>
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        {t("studio.text")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border ${
                  isAccordion === 8 ? "active" : ""
                }`}
              >
                <div className="header-area" onClick={() => handleAccordion(8)}>
                  <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                    <div className="mtitle-ara">
                      <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                        08
                        <span className="rot60 d-inline-block theme-clr">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                      <span className="mtitle d-block mt-6">
                        <Link
                          href="/equipment"
                          className="white-clr whitehover"
                        >
                          {t("accordeon.equipment")}
                        </Link>
                      </span>
                      <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        <div className="d-md-none d-block">
                          <ul className="modern-list d-grid gap-2">
                            <li className="d-flex align-items-center gap-2">
                              <i className="fas fa-chevron-right" />{" "}
                              {t("equipment.cameras")}
                            </li>
                            <li className="d-flex align-items-center gap-2">
                              <i className="fas fa-chevron-right" />{" "}
                              {t("equipment.video")}
                            </li>
                            <li className="d-flex align-items-center gap-2">
                              <i className="fas fa-chevron-right" />{" "}
                              {t("equipment.hd")}
                            </li>
                            <li className="d-flex align-items-center gap-2">
                              <i className="fas fa-chevron-right" />{" "}
                              {t("equipment.support")}
                            </li>
                            <li className="d-flex align-items-center gap-2">
                              <i className="fas fa-chevron-right" />{" "}
                              {t("equipment.filters")}
                            </li>
                            <li className="d-flex align-items-center gap-2">
                              <i className="fas fa-chevron-right" />{" "}
                              {t("equipment.grip")}
                            </li>
                          </ul>
                        </div>
                      </span>
                      {/* <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                        We build intelligent next-generation solutions at the
                        intersection of new business opportunities and
                        technological innovations.
                      </span> */}
                    </div>
                    <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                      <ul className="modern-list d-grid gap-2">
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" />{" "}
                          {t("equipment.cameras")}
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" />{" "}
                          {t("equipment.video")}
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" />{" "}
                          {t("equipment.hd")}
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" />{" "}
                          {t("equipment.support")}
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" />{" "}
                          {t("equipment.filters")}
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" />{" "}
                          {t("equipment.grip")}
                        </li>
                      </ul>
                      <div className="tab-remove-thumb">
                        <img src="\assets\img\element\7.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Service Tabing section*/}
        </div>
      </section>
    </>
  );
}
