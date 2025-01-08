"use client";
import { useTranslationClient } from "../../../locales/client";
import Layout from "../../layout/Layout";
import Protfolio1 from "../Protfolio1";

const images = [
  "/assets/img/av-prod/__IMG_5352.JPG",
  "/assets/img/av-prod/_IMG_1825.jpg",
  "/assets/img/av-prod/_IMG_1827.jpg",
  "/assets/img/av-prod/_IMG_1828.jpg",
  "/assets/img/av-prod/_IMG_1845.jpg",
  "/assets/img/av-prod/_IMG_1850.jpg",
  "/assets/img/av-prod/_IMG_4524.JPG",
  "/assets/img/av-prod/_IMG_4528.JPG",
  "/assets/img/av-prod/_IMG_4556.JPG",
  "/assets/img/av-prod/_IMG_6729.jpg",
  "/assets/img/av-prod/_IMG_6768.jpg",
];

export default function AvProductions() {
  const { t } = useTranslationClient();
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle={t("av-productions.title")}
      >
        <section className="Service-details pt-space pb-space">
          <div className="container">
            <h4>{t("av-productions.title")}</h4>
            <br />
            <div
              style={{ fontSize: "24px", fontWeight: "400" }}
              dangerouslySetInnerHTML={{
                __html: t("av-productions.text").replace(/\n/g, "<br>"),
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
