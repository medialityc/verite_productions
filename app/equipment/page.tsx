import React from "react";
import Layout from "../../components/layout/Layout";
import { useTranslationServer } from "../../locales/server";
import Card from "../../components/ui/card";
import Protfolio1 from "../../components/sections/Protfolio1";

async function Page() {
  const { t } = await useTranslationServer();
  const imagesMock = [
    "/assets/img/equipo-images/BLOOMBERG2.jpg",
    "/assets/img/equipo-images/CULTO6.JPG",
    "/assets/img/equipo-images/DESFILE10.JPG",
    "/assets/img/equipo-images/ENG_HYBRID.jpg",
    "/assets/img/equipo-images/ENG3.jpg",
    "/assets/img/equipo-images/EQUIPO ANAYANSI.JPG",
    "/assets/img/equipo-images/EQUIPO_22.jpg",
    "/assets/img/equipo-images/EQUIPO_CCTV_2.jpg",
    "/assets/img/equipo-images/EQUIPO.CAMARA.jpg",
    "/assets/img/equipo-images/EQUIPO7.JPG",
    "/assets/img/equipo-images/EQUIPO9.jpg",
    "/assets/img/equipo-images/EQUIPO11.jpg",
    "/assets/img/equipo-images/EQUIPO15.jpg",
    "/assets/img/equipo-images/EQUIPO27.jpg",
    "/assets/img/equipo-images/EQUIPO30.jpg",
    "/assets/img/equipo-images/GRUA_ACP.jpg",
    "/assets/img/equipo-images/LONCHERA_MOVIL.jpg",
    "/assets/img/equipo-images/MASTERCONTROL2.jpg",
    "/assets/img/equipo-images/MASTERCONTROL4.jpg",
    "/assets/img/equipo-images/MOVIL MOSTRA.jpg",
    "/assets/img/equipo-images/MOVIL.INTERIOR.JPG",
    "/assets/img/equipo-images/PROMPTER.CORPORATE.JPG",
    "/assets/img/equipo-images/PROMPTER3.jpg",
  ];

  const slides = imagesMock.map((slide, index) => (
    <Card key={index} index={index} alt={slide} src={slide} />
  ));

  return (
    <Layout
      headerStyle={1}
      footerStyle={3}
      breadcrumbTitle={t("nav-bar.equipment")}
    >
      <div
        style={{ display: "flex", flexDirection: "column", gap: "60px" }}
        className="container p-6"
      >
        <div className={"data-equipment-container"}>
          <div className="equipment-container">
            <div className={"equipment-subcontainer"}>
              <div className="thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                <img
                  src="/assets/img/equipo/CULTO6.JPG"
                  alt="img"
                  className=" w-100 overflow-hidden"
                  style={{ width: "100%", height: "330px" }}
                />
              </div>
              <div>
                <h5>{t("equipment.cameras")}</h5>
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.cameras.type1").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.cameras.type2").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.cameras.type3").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.cameras.type4").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.cameras.type5").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.cameras.type6").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.cameras.type7").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.cameras.type8").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.cameras.type9").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
              </div>
            </div>
            <div className={"equipment-subcontainer"}>
              <div className="thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                <img
                  src="\assets\img\equipo\GRIPweb.jpg"
                  alt="img"
                  className=" w-100 overflow-hidden"
                  style={{ width: "100%", height: "330px" }}
                />
              </div>
              <div>
                <h5>{t("equipment-text.grip")}</h5>
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.grip-text").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
              </div>
            </div>
            <div className={"equipment-subcontainer"}>
              {/* <div className="thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                <img
                  src="/assets/img/equipo/CULTO9.JPG"
                  alt="img"
                  className=" w-100 overflow-hidden"
                  style={{ width: "100%", height: "330px" }}
                />
              </div> */}
              <div>
                <h5>{t("equipment-hd")}</h5>
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.hd-text").replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
          </div>
          <div className="equipment-container2">
            <div className={"equipment-subcontainer"}>
              <div className="thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                <img
                  src="\assets\img\equipo\FILTERS-web.jpg"
                  alt="img"
                  className=" w-100 overflow-hidden"
                  style={{ width: "100%", height: "330px" }}
                />
              </div>
              <div>
                <h5>{t("equipment.filters")}</h5>
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.filters.type1").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.filters.type2").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.filters.type3").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.filters.type4").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.filters.type5").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
              </div>
            </div>

            <div className={"equipment-subcontainer"}>
              <div className="thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                <img
                  src="\assets\img\equipo\CAMERA-SUPPORTweb.jpg"
                  alt="img"
                  className=" w-100 overflow-hidden"
                  style={{ width: "100%", height: "330px" }}
                />
              </div>
              <div>
                <h5>{t("equipment-text.camera-support")}</h5>
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.camera-support-text").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
              </div>
            </div>
            <div className={"equipment-subcontainer"}>
              <div className="thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                <img
                  src="\assets\img\equipo\LIGHTING-AND-ELECweb.jpg"
                  alt="img"
                  className=" w-100 overflow-hidden"
                  style={{ width: "100%", height: "330px" }}
                />
              </div>
              <div>
                <h5>{t("equipment-text.lighting-and-electrical-support")}</h5>
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t(
                      "equipment-text.lighting-and-electrical-support-text"
                    ).replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
            <div className={"equipment-subcontainer"}>
              {/* <div className="thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                <img
                  src="/assets/img/equipo/CULTO6.JPG"
                  alt="img"
                  className=" w-100 overflow-hidden"
                  style={{ width: "100%", height: "330px" }}
                />
              </div> */}
              <div>
                <h5>{t("equipment-text.video")}</h5>
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  dangerouslySetInnerHTML={{
                    __html: t("equipment-text.video-text").replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src={`/assets/img/equipo/Equipment-banner.jpg`}
          alt={`postal`}
          className=" w-100  main-padding"
          style={{
            width: "240px",
            borderRadius: "20px",
          }}
        />
      </div>
      <div style={{ overflowX: "hidden" }}>
        <Protfolio1 images={imagesMock} />
      </div>
    </Layout>
  );
}

export default Page;
