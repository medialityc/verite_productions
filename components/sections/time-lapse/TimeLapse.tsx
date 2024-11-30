"use client";
import Image from "next/image";
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
          <div className="container-fluid main-xpadding">
            <div className="my-container row-cols-lg-4 row-cols-md-2 row-cols-1 ">
              <Image
                src={"/assets/img/element/timelapse_9171.jpg"}
                alt=""
                height={200}
                width={330}
                style={{ borderRadius: "20px" }}
              />
              <div className="my-item cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 d-flex flex-column justify-content-start gap-6 align-items-center h-100">
                <div data-aos="fade-left" data-aos-duration={1550}>
                  <div className="container">
                    <h4>{t("accordeon.timelapse")}</h4>
                    <br />
                    <div
                      style={{ fontSize: "24px", fontWeight: "400" }}
                      dangerouslySetInnerHTML={{
                        __html: t("accordeon.timelapse-text").replace(
                          /\n/g,
                          "<br>"
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
              <Image
                src={"/assets/img/element/timelapse_9718.jpg"}
                alt=""
                height={200}
                width={300}
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
