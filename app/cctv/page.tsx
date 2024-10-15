"use client";

import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { useTranslationClient } from "../../locales/client";
import Carousel from "../../components/ui/carousel";

import React from "react";



export default function CCTVPage() {  

  const { t } = useTranslationClient();
  const slides = Array.from({ length: 5 }, (_, index) => {
    const imgIndex = index + 1; 
    return (
      <img
        key={imgIndex}
        src={`/assets/img/cctv/cctv-${imgIndex}.jpg`}
        alt={`cctv-${imgIndex}`}
        className=" w-100 h-100"
        style={{ width: "240px", height: "340px", borderRadius: "20px" }}
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
            <div className="my-container row-cols-2 ">
              <div className="cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 my-item">
                <div className="post-content">
                  <p
                    className="pra-clr  "
                    data-aos="fade-left"
                    data-aos-duration={1550}
                  >
                    {t("ob_mobile.description")}
                  </p>
                  <p
                    className="pra-clr  "
                    data-aos="fade-left"
                    data-aos-duration={1550}
                  >
                    {t("cctv.description")}
                  </p>
                </div>
              </div>
              <div className="my-item cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 d-flex flex-column justify-content-start gap-6 align-items-center">
                <div
                  className="carousel"
                  data-aos="fade-left"
                  data-aos-duration={1550}
                >
                  <Carousel slides={slides} />
                </div>
              </div>
              <div className="cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 my-item">
                <div className="post-content">
                  <p
                    className="pra-clr  "
                    data-aos="fade-left"
                    data-aos-duration={1550}
                  >
                    {t("ob_mobile.description")}
                  </p>
                  <p
                    className="pra-clr  "
                    data-aos="fade-left"
                    data-aos-duration={1550}
                  >
                    {t("cctv.clients_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={`/assets/img/cctv/postal.jpg`}
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
    </>
  );
}
