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
      breadcrumbTitle={t("service.streaming")}
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
        <h3>{t("service.streaming")}</h3>
        {/* live */}
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
            <p style={{ breakBefore: "always" }}>
              {t("service.streamingText")}
            </p>
          </div>
        </div>
        {/* live */}
      </div>
      <div style={{ marginTop: "60px" }}>
        <Protfolio1 images={imagesMock} />
      </div>
    </Layout>
  );
}

export default Page;
