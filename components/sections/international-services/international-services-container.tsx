"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslationClient } from "../../../locales/client";
import Layout from "../../layout/Layout";
import Protfolio1 from "../Protfolio1";

const swiperOptions = {
  modules: [Pagination, Navigation],
  spaceBetween: 0,
  speed: 1500,
  loop: true,
  navigation: {
    nextEl: ".cmn-next",
    prevEl: ".cmn-prev",
  },

  breakpoints: {
    1199: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const images = [
  "/assets/img/production/_ BASECAMP1.JPG",
  "/assets/img/production/_ BASECAMP7.JPG",
  "/assets/img/production/_ BASECAMP3.JPG",
  "/assets/img/production/_ LOGISTICS3.JPG",
  "/assets/img/production/_ LOGISTICS12.JPG",
  "/assets/img/production/_ LOGISTICS17.JPG",
  "/assets/img/production/_LOGISTICS5.JPG",
  "/assets/img/av-prod/__TARS.jpg",
  "/assets/img/av-prod/__LOGISTIC2.jpg",
  "/assets/img/production/_ SETCONSTRUCION11.JPG",
  "/assets/img/production/_ SETCONSTRUCION14.JPG",
  "/assets/img/production/_ SETCONSTRUCION16.JPG",
  "/assets/img/production/_ saving the raft.JPG",
  "/assets/img/production/__BOATS_(copy).jpg",
  "/assets/img/production/__TARS2 (1).jpg",
  "/assets/img/production/__LOCATION1.jpg",
];

export default function InternationalServices() {
  const { t } = useTranslationClient();
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle={t("international-services.title")}
      >
        <section className="Service-details pt-space pb-space">
          <div className="container">
            <h4>{t("international-services.title")}</h4>
            <br />
            <div
              style={{ fontSize: "24px", fontWeight: "400", color: "white" }}
              dangerouslySetInnerHTML={{
                __html: t("international-services.text").replace(/\n/g, "<br>"),
              }}
            />
            <div style={{ overflowX: "hidden", marginTop: "32px" }}>
              <Protfolio1 images={images} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
