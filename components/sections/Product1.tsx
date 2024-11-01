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
                  {t("whoWeAreText2")}
                </p>
                <p
                  className="white-clr mb-xxl-9 mb-xl-7 mb-xl-6 mb-6"
                  data-aos="fade-up"
                  data-aos-duration={1900}
                >
                  {t("locationText")}
                </p>
                <Link
                  target="_blank"
                  href="https://www.google.ca/maps/place/Verite+Producciones,+S.+A./@9.0181528,-79.4863139,17z/data=!4m6!3m5!1s0x8faca9eb5f4dec0f:0x4618abe8beafe0ea!8m2!3d9.0180663!4d-79.4863112!16s%2Fg%2F11b6v9g02d?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                  className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5"
                  data-aos="fade-up"
                  data-aos-duration={1900}
                >
                  (Google maps/Waze: Verite Producciones S A)
                </Link>

                <div
                  data-aos="fade-up"
                  data-aos-duration={1900}
                  style={{ fontSize: "16px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("whatWeDoText").replace(/\n/g, "<br>"),
                  }}
                />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
