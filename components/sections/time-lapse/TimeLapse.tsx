"use client";
import { useTranslationClient } from "../../../locales/client";
import Layout from "../../layout/Layout";
import Protfolio1 from "../Protfolio1";

const images = [
  "/assets/img/element/timelapse_9171.jpg",
  "/assets/img/element/timelapse_9718.jpg",
  "/assets/img/International/HYBRID NESTLE.JPG",
  "/assets/img/element/um4.jpg",
];

export default function TimeLapse() {
  const { t } = useTranslationClient();
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle={t("accordeon.timelapse")}
      >
        <section className="Service-details pt-space pb-space">
          <div className="container">
            <h4>{t("accordeon.timelapse")}</h4>
            <br />
            <div
              style={{ fontSize: "24px", fontWeight: "400" }}
              dangerouslySetInnerHTML={{
                __html: t("accordeon.timelapse-text").replace(/\n/g, "<br>"),
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
