"use client";
import React from "react";
import { useTranslationClient } from "../../locales/client";

const GaleryContainer = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslationClient();
  return (
    <>
      <h3
        className="text-center position-absolute w-100"
        style={{ zIndex: 100 }}
      >
        {t("gallery")}
      </h3>
      <div className="main-xpadding">
        <div className="position-relative d-grid galery-container">
          {children}
        </div>
      </div>
    </>
  );
};

export default GaleryContainer;
