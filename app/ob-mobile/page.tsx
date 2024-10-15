"use client";

import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { useTranslationClient } from "../../locales/client";
import Carousel from "../../components/ui/carousel";

import React from "react";
interface EquipmentListProps {
  items: { id: number; text: string }[];
}

const EquipmentList: React.FC<EquipmentListProps> = ({ items }) => {
  return (
    <ul
      className="mb-xxl-10 mb-xl-8 mb-sm-7 mb-6 list-unstyled"
      style={{ marginLeft: "20px" }}
      data-aos="fade-left"
      data-aos-duration={1550}
    >
      {items.map(item => (
        <li className="mb-2" key={item.id}>
          <i className="fas fa-circle " style={{ marginRight: "20px" }} />
          <span className="pra-clr"> {item.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default function BlogList() {
  const optionalEquipmentItems = [
    { id: 1, text: "Gr a Jimmy Jib" },
    { id: 2, text: "50x Fujinon box lens" },
    { id: 3, text: "Newtek 3play (slowmo/replay)" },
    { id: 4, text: "Teradek T-Rax H.264 encoder (Streaming)" },
    { id: 5, text: "Satelite uplink/downlink" },
  ];
  const equipmentItems = [
    { id: 1, text: "Sony PMW-350/400 y Sony HXCU-FB70 HD Cameras" },
    { id: 2, text: "BM Atem 2 switcher con Surface Panel" },
    { id: 3, text: "ESE SMPTE/EBU Master Clock Driver" },
    { id: 4, text: "VSG Advanced Signal Generator" },
    { id: 5, text: "Xdcam grabador" },
    { id: 6, text: "Blackmagic Hyperdeck Grabadoras (3)" },
    { id: 7, text: "Aja Kipro grabador" },
    { id: 8, text: "Clear-com intercom" },
    { id: 9, text: "Compix Generador de Caracteres" },
    { id: 10, text: "Blackmagic video hub 40x40 router" },
    { id: 11, text: "Blackmagic Teranex 2d" },
    { id: 12, text: "Matrox Monarch HDX Dual Channel H.264 encoder" },
    { id: 13, text: "Teradek T-Rax H.264 encoder" },
    { id: 14, text: "Prosonus 16 channel mixer" },
    { id: 15, text: "Wireless and wired mics" },
    { id: 16, text: "Multiview Monitors" },
  ];

  const { t } = useTranslationClient();
 const slides = Array.from({ length: 8 }, (_, index) => {
   const imgIndex = index + 1; // Para que vaya de 1 a 10
   return (
     <img
       key={imgIndex}
       src={`/assets/img/ob_mobile/opt-img-${imgIndex}.jpg`}
       alt={`opt-img-${imgIndex}`}
       className=" w-100 h-100"
       style={{ width: "240px", height: "340px", borderRadius: "20px" }}
    
     />
   );
 });

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Unidad Móvil">
        <section className="blog-list pt-space pb-space">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gap-8 flex-nowrap">
              <div className=" cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3   ">
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
                    {t("ob_mobile.included_equiptment_intro")}
                  </p>
                  <EquipmentList items={equipmentItems} />
                </div>
              </div>
              <div className=" cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3 d-flex flex-column justify-content-start gap-6 align-items-center">
                <div
                  style={{ height: "60%", width: "100%" }}
                  data-aos="fade-left"
                  data-aos-duration={1550}
                >
                  <Carousel slides={slides} />
                </div>
                <div className="post-content">
                  <p
                    className="pra-clr "
                    data-aos="fade-left"
                    data-aos-duration={1550}
                  >
                    {t("ob_mobile.opt")}
                  </p>
                  <EquipmentList items={optionalEquipmentItems} />
                </div>
              </div>
              <div className=" cmn-border p-xxl-7 p-xl-6 p-lg-4 p-3"
              style={{height:'50%'}}
              >
                <div
                  className="position-relative"
                  data-aos="fade-left"
                  data-aos-duration={1550}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50%" // Ajusta el ancho del SVG al 100% del contenedor
                    height="100%" // Ajusta el alto del SVG al 100% del contenedor
                    fill="currentColor"
                    className="bi bi-quote position-absolute"
                    viewBox="0 0 16 16"
                    style={{
                      zIndex: -1,
                      width: "100%",
                      height: "100%",
                      opacity: 0.1,
                      left: "-120px",
                      top: "0",
                    }}
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                  </svg>
                  <p
                    style={{
                      position: "relative",
                      zIndex: 1,
                      backgroundColor: "transparent",
                      fontStyle:'italic'
                    }}
                  >
                    {t("ob_mobile.quote")}
                  </p>
                  <cite>// VERITE PRODUCCIONES</cite>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
