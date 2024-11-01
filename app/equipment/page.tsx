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
    "/assets/img/equipo/CULTO.CCTV.JPG",
    "/assets/img/equipo/CULTO3.JPG",
    "/assets/img/equipo/CULTO6.JPG",
    "/assets/img/equipo/CULTO9.JPG",
    "/assets/img/equipo/DESFILE2.JPG",
    "/assets/img/equipo/DESFILE9.JPG",
    "/assets/img/equipo/DESFILE10.JPG",
    "/assets/img/equipo/EQUIPO ANAYANSI.JPG",
    "/assets/img/equipo/EQUIPO.JPG",
    "/assets/img/equipo/EQUIPO.PTZ.JPG",
    "/assets/img/equipo/EQUIPO5.JPG",
    "/assets/img/equipo/EQUIPO7.JPG",
    "/assets/img/equipo/EQUIPO8.JPG",
    "/assets/img/equipo/MOVIL INTERIOR.JPG",
    "/assets/img/equipo/MOVIL MOSTRA.JPG",
    "/assets/img/equipo/MOVIL.INTERIOR.JPG",
    "/assets/img/equipo/PROMPTER.JPG",
    "/assets/img/equipo/PROMPTER6.JPG",
    "/assets/img/equipo/PROMPTER20.JPG",
    "/assets/img/equipo/UNIDAD MOVIL.JPG",
  ];

  const slides = imagesMock.map((slide, index) => (
    <Card key={index} index={index} alt={slide} src={slide} />
  ));

  return (
    <Layout
      headerStyle={1}
      footerStyle={3}
      breadcrumbTitle={t("nav-bar.services")}
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
                  src="/assets/img/service/13.jpg"
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
          </div>
          <div className="equipment-container2">
            <div className={"equipment-subcontainer"}>
              <div className="thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                <img
                  src="/assets/img/equipo/MOVIL.INTERIOR.JPG"
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
                  src="/assets/img/service/10.jpg"
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
                  src="/assets/img/equipo/DESFILE2.JPG"
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
          </div>
        </div>
      </div>
      <div style={{ overflowX: "hidden" }}>
        <Protfolio1 images={imagesMock} />
      </div>
    </Layout>
  );
}

export default Page;
