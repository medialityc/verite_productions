"use client";
import Link from "next/link";
import Menu from "../Menu";
import { LocaleSwitcher } from "../../lang/language-popover";
import Logo from "./Logo";

type Props = {
  scroll: boolean;
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
  isSidebar: boolean;
  handleSidebar: () => void;
  isSearch: boolean;
  handleSearch: () => void;
};

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handleSidebar,
  isSearch,
  handleSearch,
}: Props) {
  return (
    <>
      <header
        id={"header"}
        className={`header-section cmn-fixed py-lg-0 py-6 ${
          scroll ? "animated fadeInDown header-fixed" : ""
        }`}
      >
        <div className=" mx-8  ">
          <div className="main-navbar ">
            <nav className="navbar-custom">
              <div className="d-lg-flex flex-xl-nowrap flex-wrap align-items-center justify-content-lg-between">
                <div className="d-flex align-items-center justify-content-between">
                  <Link href="/" className="brand-logo">
                    {/* <img
                      className="w-100"
                      src="/assets/img/logo/logo.png"
                      alt="logo"
                    /> */}
                    <Logo />
                  </Link>
                  <div className="d-flex align-items-center gap-xxl-5 gap-5">
                    {/* <Link
                      href="/javascript:void(0)"
                      className="search-trigger search-icon d-lg-none d-block"
                    >
                      <i className="fal fa-search" />
                    </Link> */}
                    <div className="d-block d-lg-none">
                      <LocaleSwitcher />
                    </div>
                    <button
                      className={`navbar-toggle-btn d-block d-lg-none ${
                        isMobileMenu ? "open" : ""
                      }`}
                      type="button"
                      onClick={handleMobileMenu}
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
                <div
                  className="navbar-toggle-item"
                  style={{ display: `${isMobileMenu ? "block" : "none"}` }}
                >
                  <Menu />
                </div>
                <div className=" element d-none d-lg-block">
                  <LocaleSwitcher />
                </div>
                {/* <div className="d-lg-flex d-none d-grid justify-content-center ph-clickwrap align-items-center gap-xxl-7 gap-xl-6 gap-lg-5 gap-3">
                  <div className="search-shopcart d-flex gap-xxl-9 gap-xl-5 gap-3">
                    <a
                      onClick={handleSearch}
                      className="search-trigger search-icon"
                    >
                      <i className="fal fa-search" />
                    </a>

                  </div>

                </div> */}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
