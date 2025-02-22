"use client";

import Layout from "../../components/layout/Layout";
import { useTranslationClient } from "../../locales/client";

import React from "react";
import Card from "../../components/ui/card";

export default function CCTVPage() {
  const { t } = useTranslationClient();
  const slides = Array.from({ length: 5 }, (_, index) => {
    const imgIndex = index + 1;
    return (
      <Card
        index={imgIndex}
        alt={`cctv-${imgIndex}`}
        src={`/assets/img/cctv1/cctv-${imgIndex}.jpg`}
      />
    );
  });

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CCTV/IMAG">
      <section className="blog-list pt-space pb-space">
        <div className="container-fluid main-xpadding">
          <div style={{ textAlign: "center" }}>
            <h2>CCTV/IMAG</h2>
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
          src={`/assets/img/cctv1/cctv.jpg`}
          alt={`postal`}
          className=" w-100 h-100 main-padding"
          style={{
            width: "240px",
            height: "340px",
            borderRadius: "20px",
          }}
        />
      </section>
    </Layout>
  );
}
