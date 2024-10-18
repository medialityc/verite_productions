import React from "react";
import Layout from "../../components/layout/Layout";
import { useTranslationServer } from "../../locales/server";
import Card from "../../components/ui/card";
import GaleryContainer from "../../components/ui/galeryContainer";
import Galery from "../../components/ui/galery";

async function Page() {
  const { t } = await useTranslationServer();
  const imagesMock = [
    {
      src: "/assets/img/service/4 (1).jpg",
      alt: "publicity",
      title: t("service.publicity"),
    },
    {
      src: "/assets/img/service/1 (1).jpg",
      alt: "service-production",
      title: t("service.service-production"),
    },
        {
      src: "/assets/img/service/5.jpg",
      alt: "movil",
      title: t("service.movil"),
    },
    {
      src: "/assets/img/service/6 (1).jpg",
      alt: "streaming",
      title: t("service.streaming"),
    },  
    {
      src: "/assets/img/service/8.jpg",
      alt: "time-lapse",
      title: t("service.time-lapse"),
    },
    {
      src: "/assets/img/service/14.jpg",
      alt: "file-archive",
      title: t("service.file-archive"),
    },
    {
      src: "/assets/img/service/15.jpg",
      alt: "promoter",
      title: t("service.promoter"),
    },     
  ];

  const slides = imagesMock.map((slide, index) => (
    <Card key={index} index={index} alt={slide.alt} src={slide.src} />
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
        <div className="service-container">
          <div className="service-image thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\4 (1).jpg"
              alt="img"
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
        <div className="service-container-2">
          <div className="service-image-2 thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\1 (1).jpg"
              alt="img"
              className="w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.service-production")}</h5>
            <p style={{ breakBefore: "always" }}>
              {t("service.service-production-text")}
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-image thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\3.jpg"
              alt="img"
              className=" w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.postproduction")}</h5>
            <p style={{ breakBefore: "always" }}>
              {t("service.postproductionText")}
            </p>
          </div>
        </div>
        <div className="service-container-2">
          <div className="service-image-2 thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\5.jpg"
              alt="img"
              className="w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.movil")}</h5>
            <p style={{ breakBefore: "always" }}>{t("service.movilText")}</p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-image thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\6 (1).jpg"
              alt="img"
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
        <div className="service-container-2">
          <div className="service-image-2 thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\9.jpg"
              alt="img"
              className="w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.satelite")}</h5>
            <p style={{ breakBefore: "always" }}>{t("service.sateliteText")}</p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-image thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\8.jpg"
              alt="img"
              className=" w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.time-lapse")}</h5>
            <p style={{ breakBefore: "always" }}>
              {t("service.time-lapse-text")}
            </p>
          </div>
        </div>
        <div className="service-container-2">
          <div className="service-image-2 thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\14.jpg"
              alt="img"
              className="w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.file-archive")}</h5>
            <p style={{ breakBefore: "always" }}>
              {t("service.file-archive-text")}
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-image thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\15.jpg"
              alt="img"
              className=" w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.promoter")}</h5>
            <p style={{ breakBefore: "always" }}>
              {t("service.promoter-text")}
            </p>
          </div>
        </div>
        <div className="service-container-2">
          <div className="service-image-2 thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\screen.png"
              alt="img"
              className="w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.screen")}</h5>
            <p style={{ breakBefore: "always" }}>{t("service.screen-text")}</p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-image thumb overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
            <img
              src="\assets\img\service\16.jpg"
              alt="img"
              className=" w-100 overflow-hidden"
            />
          </div>
          <div className="service-text">
            <h5>{t("service.loyal")}</h5>
            <p style={{ breakBefore: "always" }}>{t("service.loyal-text")}</p>
          </div>
        </div>
      </div>
      <div style={{overflowX: "hidden"}}>
        <GaleryContainer>
          <Galery autoSlide slides={slides} />
        </GaleryContainer>
      </div>
    </Layout>
  );
}

export default Page;
