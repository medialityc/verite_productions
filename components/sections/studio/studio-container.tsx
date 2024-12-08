"use client";
import { Lightbox } from "yet-another-react-lightbox";
import { useTranslationClient } from "../../../locales/client";
import Layout from "../../layout/Layout";
import Protfolio1 from "../Protfolio1";
import Image from "next/image";
import { useState } from "react";

const imagesMock = [
  "/assets/img/ESTUDIO/_ ESTUDIO HYBRID.JPG",
  "/assets/img/ESTUDIO/__CORPORATE_HYBRID_2.jpg",
  "/assets/img/ESTUDIO/__CORPORATE.HYBRID.jpg",
  "/assets/img/ESTUDIO/__ESTUDIO.jpg",
  "/assets/img/ESTUDIO/__FACHADA_ESTUDIO.jpg",
  "/assets/img/ESTUDIO/__HYBRID_NESTLE_3.jpg",
  "/assets/img/ESTUDIO/__Solar1.jpg",
  "/assets/img/ESTUDIO/__Solar2.jpg",
];
export default function ServiceDetails() {
  const { t } = useTranslationClient();
  const [basicExampleOpen, setBasicExampleOpen] = useState(false);
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle={t("studio.title")}
      >
        <section className="Service-details pt-space pb-space">
          <div className="container-fluid main-xpadding">
            <div className="my-container row-cols-lg-4 row-cols-md-2 row-cols-1 ">
              <Image
                src={"/assets/img/studio/planos1.PNG"}
                alt=""
                height={200}
                width={330}
                style={{ borderRadius: "20px" }}
                onClick={() => setBasicExampleOpen(true)}
              />
              <div className="my-item cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 d-flex flex-column justify-content-start gap-6 align-items-center h-100">
                <div data-aos="fade-left" data-aos-duration={1550}>
                  <div className="container">
                    <h4>{t("studio.title")}</h4>
                    <br />
                    <div
                      style={{ fontSize: "24px", fontWeight: "400" }}
                      dangerouslySetInnerHTML={{
                        __html: t("studio.formated-text").replace(
                          /\n/g,
                          "<br>"
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
              <Image
                src={"/assets/img/studio/planos2.PNG"}
                alt=""
                height={200}
                width={320}
                style={{ borderRadius: "20px" }}
                onClick={() => setBasicExampleOpen(true)}
              />
            </div>
            <div style={{ marginTop: "60px" }}>
              <Protfolio1 images={imagesMock} />
            </div>
          </div>
          <Lightbox
            open={basicExampleOpen}
            close={() => setBasicExampleOpen(false)}
            slides={[
              { src: "/assets/img/studio/planos1.PNG" },
              { src: "/assets/img/studio/planos2.PNG" },
            ]}
          />
        </section>
      </Layout>
    </>
  );
}
