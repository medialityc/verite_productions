"use client";
import Link from "next/link";
import Logo from "../header/Logo";
import { useTranslationClient } from "../../../locales/client";

export default function Footer1() {
  const { t } = useTranslationClient();
  return (
    <>
      <footer className="footer-version-one zindex1 position-relative">
        <div className="container">
          <div className="footer-topversion-one pt-20 pb-20">
            <div className="row gy-lg-0 gy-10 mt-xxl-5 mb-xxl-5 justify-content-sm-between justify-content-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h5
                    className="footer-title mb-xxl-7 mb-xl-6 mb-5"
                    data-aos="zoom-in-down"
                    data-aos-duration={1900}
                  >
                    {t("footer.about-us")}
                    <svg
                      className="d-block mt-xxl-4 mt-3"
                      width={83}
                      height={2}
                      viewBox="0 0 83 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1={-1}
                        x2={83}
                        y2={-1}
                        transform="matrix(1 0 0 -1 0 0)"
                        stroke="url(#paint0_linear_6308_4304)"
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_6308_4304"
                          x1="4.02912"
                          y1="0.000277584"
                          x2={80}
                          y2="0.000110496"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#EF7F1A" />
                          <stop
                            offset={1}
                            stopColor="#EF7F1A"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h5>
                  <ul
                    className="link-footer d-grid gap-xxl-5 gap-4"
                    data-aos="zoom-in"
                    data-aos-duration={1400}
                  >
                    <li>
                      <Link href="https://www.instagram.com/veriteproducciones/">
                        <div className="d-flex align-items-center gap-2 flink-items pra-clr">
                          <span className="ani-icons">
                            <i className="fas fa-angle-double-right pra-clr" />
                          </span>
                          Instagram: veriteproducciones
                        </div>
                      </Link>
                    </li>
                    <Link href={"https://x.com/veritepanama"}>
                      <div className="d-flex align-items-center gap-2 flink-items pra-clr">
                        <span className="ani-icons">
                          <i className="fas fa-angle-double-right pra-clr" />
                        </span>
                        X: @veritepanama
                      </div>
                    </Link>
                    <li>
                      <Link
                        href={"https://www.facebook.com/veriteproducciones"}
                      >
                        <div className="d-flex align-items-center gap-2 flink-items pra-clr">
                          <span className="ani-icons">
                            <i className="fas fa-angle-double-right pra-clr" />
                          </span>
                          Facebook: Veriteproducciones
                        </div>
                      </Link>
                    </li>
                  </ul>
                  <ul className="common-social d-flex align-items-center gap-2 mt-4">
                    <li data-aos="zoom-in-right" data-aos-duration={1400}>
                      <Link
                        href="https://www.facebook.com/VERITEPRODUCCIONES/timeline/"
                        className="d-center"
                        target="_blank"
                      >
                        <svg
                          width={10}
                          height={16}
                          viewBox="0 0 10 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                            <path
                              d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_6308_28">
                              <rect width={10} height={16} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration={1600}>
                      <Link
                        target="_blank"
                        href="https://x.com/veritepanama"
                        className="d-center p-2"
                      >
                        <svg
                          id="Layer_2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1000.77 936.69"
                        >
                          <g id="Layer_1-2" data-name="Layer_1">
                            <g id="layer1">
                              <path
                                id="path1009"
                                fill="#ffffff"
                                d="M2.43,0l386.39,516.64L0,936.69h87.51l340.42-367.76,275.04,367.76h297.8l-408.13-545.7L954.57,0h-87.51l-313.51,338.7L300.23,0H2.43ZM131.13,64.46h136.81l604.13,807.76h-136.81L131.13,64.46Z"
                              />
                            </g>
                          </g>
                        </svg>
                      </Link>
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration={1800}>
                      <Link
                        target="_blank"
                        href="https://instagram.com/explore/tags/veriteproducciones/"
                        className="d-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                          <path d="M16.5 7.5l0 .01" />
                        </svg>
                      </Link>
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration={1900}>
                      <Link
                        href="https://www.youtube.com/channel/UCq60h08B8Y-x3-SlULBkZaw/videos"
                        className="d-center"
                      >
                        <svg
                          width={18}
                          height={12}
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h5
                    className="footer-title mb-xxl-7 mb-xl-6 mb-5"
                    data-aos="zoom-in-down"
                    data-aos-duration={1900}
                  >
                    {t("footer.contact-us")}
                    <svg
                      className="d-block mt-xxl-4 mt-3"
                      width={83}
                      height={2}
                      viewBox="0 0 83 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1={-1}
                        x2={83}
                        y2={-1}
                        transform="matrix(1 0 0 -1 0 0)"
                        stroke="url(#paint0_linear_6308_4304)"
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_6308_43041"
                          x1="4.02912"
                          y1="0.000277584"
                          x2={80}
                          y2="0.000110496"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#EF7F1A" />
                          <stop
                            offset={1}
                            stopColor="#EF7F1A"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h5>
                  <ul
                    className="link-footer d-grid gap-xxl-5 gap-4"
                    data-aos="zoom-in"
                    data-aos-duration={1400}
                  >
                    <li>
                      <Link
                        href="https://www.google.ca/maps/place/Verite+Producciones,+S.+A./@9.0180786,-79.488278,17z/data=!3m1!4b1!4m2!3m1!1s0x8faca9eb5f4dec0f:0x4618abe8beafe0ea"
                        className="d-flex align-items-center gap-2 flink-items pra-clr"
                      >
                        {t("footer.our-place")}
                      </Link>
                      {t("footer.our-place-desc")}
                    </li>
                    <li>
                      <p>{t("footer.email")}</p>
                      <div className="d-flex align-items-center gap-2 flink-items pra-clr">
                        <span className="ani-icons">
                          <i className="fas fa-angle-double-right pra-clr" />
                        </span>
                        {t("footer.mail")}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h5
                    className="footer-title mb-xxl-7 mb-xl-6 mb-5"
                    data-aos="zoom-in-down"
                    data-aos-duration={1900}
                  >
                    {t("footer.services")}
                    <svg
                      className="d-block mt-xxl-4 mt-3"
                      width={83}
                      height={2}
                      viewBox="0 0 83 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1={-1}
                        x2={83}
                        y2={-1}
                        transform="matrix(1 0 0 -1 0 0)"
                        stroke="url(#paint0_linear_6308_4305)"
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_6308_4305"
                          x1="4.02912"
                          y1="0.000277584"
                          x2={80}
                          y2="0.000110496"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#EF7F1A" />
                          <stop
                            offset={1}
                            stopColor="#EF7F1A"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h5>
                  <ul
                    className="link-footer d-grid gap-xxl-5 gap-4"
                    data-aos="zoom-in"
                    data-aos-duration={1400}
                  >
                    <li>
                      <div
                        style={{ fontSize: "16px", color: "white" }}
                        dangerouslySetInnerHTML={{
                          __html: t("footer.contacts").replace(/\n/g, "<br>"),
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="footer-bottom-version-one d-sm-flex gap-sm-0 gap-4 d-grid align-items-center justify-content-sm-between justify-content-center bg2-clr px-xxl-7 px-6 py-xxl-6 py-xl-6 py-7 mb-xxl-10 mb-lg-9 mb-sm-8 mb-5"
            data-aos="zoom-in-up"
            data-aos-duration={1600}
          >
            <Link href="/" className="footer-logov1 m-sm-0 m-auto">
              <Logo />
            </Link>
            <Link href="/#mains" className="footer-topscroll d-center themebg">
              <i className="fas fa-arrow-up" />
            </Link>
            <p className="pra-clr">
              © All Copyright {new Date().getFullYear()} by{" "}
              <Link href="/" className="theme-clr">
                Verite Producciones
              </Link>
            </p>
          </div>
          <div>
            {t("footer.proud-member")}
            <Link href="https://internationalquorum.com/" className="theme-clr">
              <img src="/assets/img/footer/iq_red-dot_logo.png" alt="" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
