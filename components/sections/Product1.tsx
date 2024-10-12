"use server";
import Link from "next/link";
import { useTranslationServer } from "../../locales/server";

export default async function Product1() {
  const { t } = await useTranslationServer();
  return (
    <section id="about" className="about-product pt-space">
      <div className="container">
        <div className="row g-xxl-7 g-5">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="about-product-thumb w-100"
              data-aos="zoom-in"
              data-aos-duration={2000}
            >
              <img
                src="/assets/img/about/veritelogo.png"
                alt="img"
                className="w-100"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="about-product-content ps-xxl-10">
              <div className="pricing-title">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5"
                    data-aos="fade-up-right"
                    data-aos-duration={1500}
                  >
                    Verite Producciones
                  </div>
                </div>
                <h2
                  className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4"
                  data-aos="fade-up"
                  data-aos-duration={1600}
                >
                  {t("who")} {"  "}
                  <span className="fw-400 theme-clr">{t("weAre")}</span>
                </h2>
                <p
                  className="white-clr mb-xxl-9 mb-xl-7 mb-xl-6 mb-6"
                  data-aos="fade-up"
                  data-aos-duration={1900}
                >
                  {t("whoWeAreText")}
                </p>
                <p
                  className="white-clr mb-xxl-9 mb-xl-7 mb-xl-6 mb-6"
                  data-aos="fade-up"
                  data-aos-duration={1900}
                >
                  {t("whoWeAreText1")}
                </p>
                <p
                  className="white-clr mb-xxl-9 mb-xl-7 mb-xl-6 mb-6"
                  data-aos="fade-up"
                  data-aos-duration={1900}
                >
                  {t("locationText")}
                </p>
                {/* <div
                    className="discover-dating"
                    data-aos="fade-up"
                    data-aos-duration={2200}
                  >
                    <div className="allyear d-flex align-items-center justify-content-between mb-xxl-4 mb-xl-3">
                      <h5 className="fw-medium theme-clr w-25">1250</h5>
                      <h5 className="fw-medium theme-clr w-25">5460</h5>
                      <h5 className="fw-medium theme-clr w-25">+2200</h5>
                      <h5 className="fw-medium theme-clr w-25"> 22</h5>
                    </div>
                    <div className="allyear-content d-flex justify-content-between">
                      <div className="allyear-item">
                        <h5 className="white-clr mb-xxl-3 mb-2">
                          {t("problematicClients")}
                        </h5>
                      </div>
                      <div className="allyear-item">
                        <h5 className="white-clr mb-xxl-3 mb-2">
                          {t("coffeeCups")}
                        </h5>
                      </div>
                      <div className="allyear-item">
                        <h5 className="white-clr mb-xxl-3 mb-2">
                          {t("completedProjects")}
                        </h5>
                      </div>
                      <div className="allyear-item">
                        <h5 className="white-clr mb-xxl-3 mb-2">
                          {t("yearsOfService")}
                        </h5>
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
