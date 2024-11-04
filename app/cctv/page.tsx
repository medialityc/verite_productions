"use client";

import Layout from "../../components/layout/Layout";
import { useTranslationClient } from "../../locales/client";

import React from "react";
import Card from "../../components/ui/card";
import Protfolio1 from "../../components/sections/Protfolio1";
const imageMock = [
  "/assets/img/cctv/cctv-1.jpg",
  "/assets/img/cctv/cctv-2.jpg",
  "/assets/img/cctv/cctv-3.jpg",
  "/assets/img/cctv/cctv-4.jpg",
  "/assets/img/cctv/cctv-5.jpg",
  "/assets/img/equipo/CULTO.CCTV.JPG",
  "/assets/img/equipo/CULTO3.JPG",
  "/assets/img/cctv/cctv-8.jpg",
  "/assets/img/equipo/CULTO6.JPG",
  "/assets/img/equipo/CULTO9.JPG",
  "/assets/img/cctv/cctv-11.jpg",
  "/assets/img/equipo/DESFILE2.JPG",
];
export default function CCTVPage() {
  const { t } = useTranslationClient();
  const slides = Array.from({ length: 5 }, (_, index) => {
    const imgIndex = index + 1;
    return (
      <Card
        index={imgIndex}
        alt={`cctv-${imgIndex}`}
        src={`/assets/img/cctv/cctv-${imgIndex}.jpg`}
      />
    );
  });

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="CCTV/IMAG/MEDIA POOL"
      >
        <section className="blog-list pt-space pb-space">
          <div className="container-fluid main-xpadding">
            <div style={{ textAlign: "center" }}>
              <h2>CCTV/IMAG/MEDIA POOL</h2>
              <p
                style={{
                  textAlign: "start",
                  fontSize: "24px",
                  marginTop: "20px",
                }}
              >
                {t("cctv.text")}
              </p>
            </div>
          </div>
          <img
            src={`/assets/img/cctv/cctv-14.jpg`}
            alt={`postal`}
            className=" w-100 h-100 main-padding"
            style={{
              width: "240px",
              height: "340px",
              borderRadius: "20px",
            }}
          />
          <div style={{ marginTop: "60px" }}>
            <Protfolio1 images={imageMock} />
          </div>
        </section>
      </Layout>
    </>
  );
}
