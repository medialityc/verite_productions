import React from "react";
import Galery from "./galery";

const GaleryContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <h3 className="text-center position-absolute w-100" style={{ zIndex: 100 }}>
          Galeria
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
