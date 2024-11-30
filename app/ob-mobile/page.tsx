"use client";

import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { useTranslationClient } from "../../locales/client";
import Carousel from "../../components/ui/carousel";

import React from "react";
import GaleryContainer from "../../components/ui/galeryContainer";
import Galery from "../../components/ui/galery";
import Card from "../../components/ui/card";
import Protfolio1 from "../../components/sections/Protfolio1";
interface EquipmentListProps {
  items: { id: number; text: string }[];
}
const imagesMock = [
  "/assets/img/equipo/EQUIPO ANAYANSI.JPG",
  "/assets/img/equipo/EQUIPO.JPG",
  "/assets/img/equipo/EQUIPO3.jpg",
  "/assets/img/equipo/EQUIPO5.JPG",
  "/assets/img/equipo/EQUIPO7.JPG",
  "/assets/img/equipo/EQUIPO8.JPG",
  "/assets/img/equipo/MOVIL INTERIOR.JPG",
  "/assets/img/equipo/MOVIL MOSTRA.jpg",
  "/assets/img/equipo/MOVIL.INTERIOR.JPG",
];
const EquipmentList: React.FC<EquipmentListProps> = ({ items }) => {
  return (
    <ul
      className="mb-xxl-10 mb-xl-8 mb-sm-7 mb-6 list-unstyled"
      style={{ marginLeft: "20px" }}
      data-aos="fade-left"
      data-aos-duration={1550}
    >
      {items.map((item) => (
        <li className="mb-2" key={item.id}>
          <i className="fas fa-circle " style={{ marginRight: "20px" }} />
          <span className="pra-clr"> {item.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default function BlogList() {
  const optionalEquipmentItems = [
    { id: 1, text: "Grúa Jimmy Jib Extreme" },
    { id: 2, text: "50x Fujinon box lens" },
    { id: 3, text: "Newtek 3play (slowmo/replay)" },
    { id: 4, text: "Wirecast Encoder" },
    { id: 5, text: "Teleprompter " },
  ];

  const { t } = useTranslationClient();
  const slides = imagesMock.slice(0, 5).map((image, index) => {
    const imgIndex = index + 1; // Para que vaya de 1 a 10
    return (
      <div className="galery-on-obmobile">
        <Card
          alt={`opt-img-${imgIndex}`}
          index={imgIndex}
          src={image}
          key={imgIndex}
        />
      </div>
    );
  });

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={t("accordeon.ob-units-title")}
    >
      <section className="blog-list pt-space pb-space">
        <div className="container-fluid main-xpadding">
          <div className="my-container row-cols-2 ">
            <div className="cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 my-item">
              <div className="post-content">
                <p
                  className="pra-clr  "
                  data-aos="fade-left"
                  data-aos-duration={1550}
                >
                  <div
                    style={{ fontSize: "20px" }}
                    dangerouslySetInnerHTML={{
                      __html: t("ob_mobile.description").replace(/\n/g, "<br>"),
                    }}
                  />
                </p>

                {/* <EquipmentList items={equipmentItems} /> */}
              </div>
            </div>
            <div
              className="my-item cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 d-flex flex-column justify-content-start gap-6 align-items-center"
              style={{ maxHeight: "800px" }}
            >
              <div
                className="carousel"
                data-aos="fade-left"
                data-aos-duration={1550}
                style={{ maxHeight: "400px" }}
              >
                <Carousel slides={slides} />
              </div>
              <div className="post-content">
                <p
                  className="pra-clr "
                  data-aos="fade-left"
                  data-aos-duration={1550}
                >
                  {t("ob_mobile.opt")}
                </p>
                <EquipmentList items={optionalEquipmentItems} />
                <div
                  className="position-relative"
                  data-aos="fade-left"
                  data-aos-duration={1550}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50%"
                    height="100%"
                    fill="currentColor"
                    className="bi bi-quote position-absolute"
                    viewBox="0 0 16 16"
                    style={{
                      zIndex: -1,
                      width: "100%",
                      height: "100%",
                      opacity: 0.1,
                      left: "-120px",
                      top: "0",
                    }}
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                  </svg>
                  <p
                    style={{
                      position: "relative",
                      zIndex: 1,
                      backgroundColor: "transparent",
                      fontStyle: "italic",
                    }}
                  >
                    {t("ob_mobile.quote")}
                  </p>
                  <cite>// VERITE PRODUCCIONES</cite>
                </div>
              </div>
            </div>
            <div
              className="my-item cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3"
              style={{ height: "50%" }}
            >
              <div className="post-content">
                <p
                  className="pra-clr  "
                  data-aos="fade-left"
                  data-aos-duration={1550}
                >
                  <div
                    style={{ fontSize: "20px" }}
                    dangerouslySetInnerHTML={{
                      __html: t("ob_mobile.description2").replace(
                        /\n/g,
                        "<br>"
                      ),
                    }}
                  />
                </p>

                {/* <EquipmentList items={equipmentItems} /> */}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "60px" }}>
          <Protfolio1 images={imagesMock} />
        </div>
      </section>
    </Layout>
  );
}
