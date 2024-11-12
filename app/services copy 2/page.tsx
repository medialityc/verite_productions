import React from "react";
import Layout from "../../components/layout/Layout";
import { useTranslationServer } from "../../locales/server";
import Card from "../../components/ui/card";
import GaleryContainer from "../../components/ui/galeryContainer";
import Galery from "../../components/ui/galery";
import Protfolio1 from "../../components/sections/Protfolio1";

async function Page() {
  const { t } = await useTranslationServer();
  const imagesMock = [
    "/assets/international/CCTV.MULINO.TDP.17.jpg",
    "/assets/international/DEBATES2024.CHIRIQUI11.jpg",
    "/assets/international/IMAG.MORAT.JPG",
    "/assets/international/CCTV.MULINO.TDP28.jpg",
    "/assets/international/GOBIERNO5.jpg",
    "/assets/international/IMAG JUANES.JPG",
    "/assets/international/CCTV.LOMBANA24.4.jpg",
    "/assets/international/PRODUCCION.SECH.JPG",
    "/assets/international/IMAG.SHADING.JPG",
    "/assets/international/CCTV.MULINO.TDP26.jpg",
    "/assets/international/CCTV.MULINO.TDP.12(1).jpg",
    "/assets/international/CCTV.MULINO.TDP.6.jpg",
  ];

  return (
    <Layout
      headerStyle={1}
      footerStyle={3}
      breadcrumbTitle={t("nav-bar.services")}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
        }}
        className="container p-6"
      >
        <h3>{t("service.title")}</h3>
        <div className="service-container-2">
          <div className="service-image-2 thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\international\PRODUCCION.SECH.JPG"
              alt="img"
              className="w-100 overflow-hidden"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="service-text">
            <h5>{t("service.service-production")}</h5>
            <p
              style={{ breakBefore: "always" }}
              dangerouslySetInnerHTML={{
                __html: t("service.service-production-text").replace(
                  /\n/g,
                  "<br />"
                ),
              }}
            />
          </div>
        </div>
        <div className="service-container">
          <div className="service-image thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\equipo\UNIDAD MOVIL.JPG"
              alt="img"
              style={{ borderRadius: "20px" }}
              className="w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.movil")}</h5>
            <p style={{ breakBefore: "always" }}>{t("service.movilText")}</p>
          </div>
        </div>
        <div className="service-container-2">
          <div className="service-image-2 thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\corporate\CORPORATE.BID1.jpg"
              alt="img"
              style={{ borderRadius: "20px" }}
              className=" w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.streaming")}</h5>
            <p style={{ breakBefore: "always" }}>
              {t("service.streamingText")}
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-image thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\corporate\CORPORATE.NESTLE.JPG"
              alt="img"
              style={{ borderRadius: "20px" }}
              className=" w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.publicity")}</h5>
            <p style={{ breakBefore: "always" }}>
              {t("service.publicityText")}
            </p>
          </div>
        </div>
        {/* <div className="service-container-2">
          <div className="service-image-2 thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\9.jpg"
              alt="img"
              className="w-100 overflow-hidden"
            />
          </div>
        </div> */}
        <div className="service-container-2">
          <div className="service-image-2 thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\8.jpg"
              alt="img"
              style={{ borderRadius: "20px" }}
              className="w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.time-lapse")}</h5>
            <p style={{ breakBefore: "always" }}>
              {t("service.time-lapse-text")}
            </p>
          </div>
        </div>
        {/* <div className="service-container-2">
          <div className="service-image-2 thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\14.jpg"
              alt="img"
              className="w-100 overflow-hidden"
            />
          </div>
        </div> */}
        {/* <div className="service-container">
          <div className="service-image thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\15.jpg"
              alt="img"
              className=" w-100 overflow-hidden"
            />
          </div>
        </div> */}
        {/* <div className="service-container-2">
          <div className="service-image-2 thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\screen.png"
              alt="img"
              className="w-100 overflow-hidden"
            />
          </div>
        </div> */}
        {/* <div className="service-container">
          <div className="service-image thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\16.jpg"
              alt="img"
              className=" w-100 overflow-hidden"
            />
          </div>
        </div> */}
      </div>
      <div style={{ marginTop: "60px" }}>
        <Protfolio1 images={imagesMock} />
      </div>
    </Layout>
  );
}

export default Page;
