"use client";
import { useTranslationClient } from "../../../locales/client";
import Layout from "../../layout/Layout";
import Protfolio1 from "../Protfolio1";

const images = [
  "/assets/international/DEBATES2024.CHIRIQUI2.jpg",
  "/assets/international/DEBATES2024.CHIRIQUI15.jpg",
  "/assets/international/DEBATES2024.CHIRIQUI6.jpg",
  "/assets/international/DEBATES2024.CHIRIQUI16.jpg",
  "/assets/international/DEBATES2024.CHIRIQUI14(1).jpg",
  "/assets/international/CCTV.MULINO.TDP.6.jpg",
  "/assets/international/CCTV.MULINO.TDP.12(1).jpg",
  "/assets/international/CCTV.MULINO.TDP28.jpg",
  "/assets/international/CCTV.MULINO.TDP.9.jpg",
  "/assets/international/CCTV.MULINO.TDP.4.jpg",
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
