"use client";

import Link from "next/link";
// import { usePathname } from 'next/navigation'
import { useState } from "react";
import { useTranslationClient } from "../../locales/client";

export default function Menu() {
  const { t } = useTranslationClient();
  // const pathname = usePathname()
  // const [currentMenuItem, setCurrentMenuItem] = useState("")

  // useEffect(() => {
  //     setCurrentMenuItem(pathname)
  // }, [pathname])

  // const checkCurrentMenuItem = (path) => currentMenuItem === path ? "active" : ""
  // const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "active" : ""
  const [isAccordion, setIsAccordion] = useState(0);

  const handleAccordion = (key: number) => {
    setIsAccordion((prevState) => (prevState === key ? 0 : key));
  };

  return (
    <>
      {/* <ul className="menu">
                <li className={`dropdown ${checkParentActive(["/home-02", "/home-03"])}`}>
                    <Link href="/#">Home</Link>
                    <ul className="sub-menu">
                        <li className={`item ${checkCurrentMenuItem("/")}`}>
                            <Link href="//">Home 1</Link>
                        </li>
                        <li className={`item ${checkCurrentMenuItem("/home-02")}`}>
                            <Link href="//home-02">Home 2</Link>
                        </li>
                    </ul>
                </li>
                <li className={`item ${pathname === "/about" ? "active" : ""}`}>
                    <Link href="//about">about</Link>
                </li>
            </ul> */}
      <ul className="custom-nav  d-lg-flex d-grid gap-xxl-10 gap-xl-8 gap-lg-5 gap-md-2 gap-2 pt-lg-0 pt-5">
        {/*<li className="menu-item position-relative">*/}
        {/*  <button*/}
        {/*    className="position-relative ps-5  white-clr fw_500 cus-z1"*/}
        {/*    onClick={() => handleAccordion(1)}*/}
        {/*  >*/}
        {/*    Home*/}
        {/*  </button>*/}
        {/*  <ul*/}
        {/*    className="sub-menu px-lg-4 py-xxl-3 py-2"*/}
        {/*    style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}*/}
        {/*  >*/}
        {/*    <li className="menu-link py-1">*/}
        {/*      <Link href="/" className="fw_500 white-clr">*/}
        {/*        Home Version-1*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li className="menu-link py-1">*/}
        {/*      <Link href="/index2" className="fw_500 white-clr">*/}
        {/*        Home Version-2*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li className="menu-link py-1">*/}
        {/*      <Link href="/index3" className="fw_500 white-clr">*/}
        {/*        Home Version-3*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li className="menu-link py-1">*/}
        {/*      <Link href="/index4" className="fw_500 white-clr">*/}
        {/*        Home Version-4*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</li>*/}
        <li className="menu-item position-relative">
          <Link href="/" className="fw_500">
            {t("nav-bar.home")}
          </Link>
        </li>
        {/* <li className="menu-item position-relative">
          <Link href="/about" className="fw_500">
            {t("nav-bar.about")}
          </Link>
        </li> */}
        <li className="menu-item position-relative">
          <button
            className="position-relative  ps-5 fw_500 white-clr cus-z1"
            onClick={() => handleAccordion(2)}
          >
            {t("nav-bar.about")}
          </button>
          <ul
            className="sub-menu px-lg-4 py-xxl-3 py-2"
            style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}
          >
            <li className="menu-link py-1">
              <Link href="/#about" className="fw_500 white-clr text-sm">
                {t("nav-bar.about")}
              </Link>
            </li>
            <li className="menu-link py-1">
              <Link href="/privacypolicy" className="fw_500 white-clr text-sm">
                {t("nav-bar.privacy")}
              </Link>
            </li>
            <li className="menu-link py-1">
              <Link href="/clients" className="fw_500 white-clr text-sm">
                {t("nav-bar.client-list")}
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item position-relative">
          <button
            className="position-relative  ps-5 fw_500 white-clr cus-z1"
            onClick={() => handleAccordion(2)}
          >
            {t("nav-bar.what_we_do")}
          </button>
          <ul
            className="sub-menu px-lg-4 py-xxl-3 py-2"
            style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}
          >
            <li className="menu-link py-1">
              <Link
                href="/international-services"
                className="fw_500 white-clr text-sm"
              >
                {t("nav-bar.services")}
              </Link>
            </li>
            <li className="menu-link py-1">
              <Link href="/ob-mobile" className="fw_500 white-clr text-sm">
                {t("nav-bar.ob_units")}
              </Link>
            </li>
            <li className="menu-link py-1">
              <Link href="/cctv" className="fw_500 white-clr text-sm">
                {t("nav-bar.cctv")}
              </Link>
            </li>
            <li className="menu-link py-1">
              <Link href="/live" className="fw_500 white-clr text-sm">
                {t("nav-bar.live")}
              </Link>
            </li>
            <li className="menu-link py-1">
              <Link href="/av-production" className="fw_500 white-clr text-sm">
                {t("nav-bar.av-prod")}
              </Link>
            </li>
            <li className="menu-link py-1">
              <Link href="/timelapse" className="fw_500 white-clr text-sm">
                {t("nav-bar.timelapse")}
              </Link>
            </li>
            <li className="menu-link py-1">
              <Link href="/studio" className="fw_500 white-clr text-sm">
                {t("nav-bar.studio")}
              </Link>
            </li>
            <li className="menu-link py-1">
              <Link href="/equipment" className="fw_500 white-clr text-sm">
                {t("nav-bar.equipment")}
              </Link>
            </li>
          </ul>
        </li>
        {/*<li className="menu-item position-relative">*/}
        {/*  <button*/}
        {/*    className="position-relative  ps-5 fw_500 white-clr text-sm cus-z1"*/}
        {/*    onClick={() => handleAccordion(3)}*/}
        {/*  >*/}
        {/*    Services*/}
        {/*  </button>*/}
        {/*  <ul*/}
        {/*    className="sub-menu px-lg-4 py-xxl-3 py-2"*/}
        {/*    style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}*/}
        {/*  >*/}
        {/*    <li className="menu-link py-1">*/}
        {/*      <Link href="/study-grid" className="fw_500 white-clr">*/}
        {/*        Case Study*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li className="menu-link py-1">*/}
        {/*      <Link href="/study-details" className="fw_500 white-clr">*/}
        {/*        Case Study Details*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</li>*/}
        {/*<li className="menu-item position-relative">*/}
        {/*  <button*/}
        {/*    className="position-relative  ps-5 fw_500 white-clr cus-z1"*/}
        {/*    onClick={() => handleAccordion(4)}*/}
        {/*  >*/}
        {/*    Equipment*/}
        {/*  </button>*/}
        {/*  <ul*/}
        {/*    className="sub-menu px-lg-4 py-xxl-3 py-2"*/}
        {/*    style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}*/}
        {/*  >*/}
        {/*    <li className="menu-link py-1">*/}
        {/*      <Link href="/blog-grid" className="fw_500 white-clr">*/}
        {/*        Blog Grid*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li className="menu-link py-1">*/}
        {/*      <Link href="/blog-list" className="fw_500 white-clr">*/}
        {/*        Blog List*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li className="menu-link py-1">*/}
        {/*      <Link href="/blog-details" className="fw_500 white-clr">*/}
        {/*        Blog Details*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</li>*/}
        {/*<li className="menu-item position-relative">*/}
        {/*  <button*/}
        {/*      className="position-relative  ps-5 fw_500 white-clr cus-z1"*/}
        {/*      onClick={() => handleAccordion(5)}*/}
        {/*  >*/}
        {/*    OB Mobile*/}
        {/*  </button>*/}
        {/*  <ul*/}
        {/*      className="sub-menu px-lg-4 py-xxl-3 py-2"*/}
        {/*      style={{display: `${isAccordion == 5 ? "block" : "none"}`}}*/}
        {/*  >*/}
        {/*    <li className="menu-link py-1">*/}
        {/*      <Link href="/service" className="fw_500 white-clr">*/}
        {/*        Service*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li className="menu-link py-1">*/}
        {/*      <Link href="/service-details" className="fw_500 white-clr">*/}
        {/*        Service Details*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</li>*/}
        <li className="menu-item position-relative">
          <Link href="/contact" className="fw_500">
            {t("nav-bar.contact")}
          </Link>
        </li>
      </ul>
    </>
  );
}
