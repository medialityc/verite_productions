"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoPopup({ style }: { style: number }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {style === 1 && (
        <a onClick={() => setOpen(true)} className="video-popup ">
          <span className="icon">
            <i
              className="fas fa-play icon-mobile"
              style={{ zIndex: 10, position: "relative" }}
            />
          </span>
          <img
            src="/assets/img/element/bn1-circle.png"
            alt="img"
            style={{ background: "#161616", borderRadius: "50%" }}
            className="hero-circle"
          />
        </a>
      )}
      {style === 2 && (
        <a
          onClick={() => setOpen(true)}
          className="video-popup step-textcircle"
        >
          <span className="icon d-center radius100">
            <i className="fas fa-play" />
          </span>
          <img
            src="/assets/img/element/step-textcircle.png"
            alt="img"
            className="step-circle"
          />
        </a>
      )}
      {style === 3 && (
        <a
          onClick={() => setOpen(true)}
          className="video-popup position-relative"
        >
          <span className="icons themebg radius100 d-center">
            <i className="fas fa-play" />
          </span>
          <img
            src="/assets/img/element/watch-ciricle01.png"
            alt="img"
            className="circle"
          />
        </a>
      )}
      <ModalVideo
        channel="custom"
        url="https://res.cloudinary.com/dwpepqgjw/video/upload/v1738871417/VERITE_SERVICIOS_2024_xxi4zs.mp4"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
