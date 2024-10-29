import Link from "next/link";
import { useTranslationServer } from "../../locales/server";

export default async function Blog1() {
  const { t } = await useTranslationServer();
  return (
    <>
      <section className="home-blog-version1 pb-space pt-space">
        <div className="container zindex position-relative">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
            <div className="pricing-title">
              <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                {t("client-section.title")}
              </div>
              <h2 className="stitle">
                {t("client-section.national")} <span className="fw-400">&</span>
                <span className="d-block fw-semibold">
                  {t("client-section.international")}
                </span>
              </h2>
              <p style={{ textAlign: "start", fontSize: "24px" }}>
                {t("client")}
              </p>
            </div>
            <Link
              href="/blog-grid"
              className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2"
            >
              {t("client-section.see-clients")}
              <span className="rot60 d-inline-block">
                <i className="fas fa-arrow-up theme-clr" />
              </span>
            </Link>
          </div>
          <div className="row g-xxl-7 g-xl-6 g-4">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog-widget-item">
                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                  <img
                    src="\assets\img\blog\download.png"
                    style={{ width: "301px", height: "242px" }}
                    alt="img"
                    className="w-100 overflow-hidden"
                  />
                </div>
                <div className="blog-cont">
                  <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                    <Link
                      href="/blog-details"
                      className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2"
                    >
                      {t("client-section.international")}
                      <span className="rot60 d-inline-block ml-10">
                        <i className="fas fa-arrow-up theme-clr" />
                      </span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="https://www.iadb.org/es" className="white-clr">
                      Banco Interamericano de Desarrollo (BID)
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog-widget-item">
                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                  <img
                    src="\assets\img\blog\download (2).jpeg"
                    alt="img"
                    style={{ width: "301px", height: "242px" }}
                    className="w-100 overflow-hidden"
                  />
                </div>
                <div className="blog-cont">
                  <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                    <Link
                      href="/blog-details"
                      className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2"
                    >
                      {t("client-section.international")}
                      <span className="rot60 d-inline-block ml-10">
                        <i className="fas fa-arrow-up theme-clr" />
                      </span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details" className="white-clr">
                      La Organizacion de Estados Americanos (OEA)
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog-widget-item">
                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                  <img
                    src="\assets\img\blog\download (1).png"
                    alt="img"
                    className="w-100 overflow-hidden"
                    style={{ width: "301px", height: "242px" }}
                  />
                </div>
                <div className="blog-cont">
                  <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                    <Link
                      href="/blog-details"
                      className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-2"
                    >
                      {t("client-section.national")}
                      <span className="rot60 d-inline-block ml-10">
                        <i className="fas fa-arrow-up theme-clr" />
                      </span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details" className="white-clr">
                      Gobierno de la Republica de Panama
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
