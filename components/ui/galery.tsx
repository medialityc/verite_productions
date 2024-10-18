'use client'
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Galery({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides = [
    <div className="h-24 w-full rounded-lg bg-secondary">1</div>,
    <div className="h-24 w-full rounded-lg bg-secondary">2</div>,
    <div className="h-24 w-full rounded-lg bg-secondary">3</div>,
    <div className="h-24 w-full rounded-lg bg-secondary">4</div>,
    <div className="h-24 w-full rounded-lg bg-secondary">4</div>,
  ],
}) {
  const [curr, setCurr] = useState(3); // Empieza desde la tercera diapositiva
  const [auto, setAuto] = useState(autoSlide);
  const prev = () =>
    setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!auto) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [auto]);

  const getSlideStyle = (index:number) => {
    const diff = (index - curr + slides.length) % slides.length;

    if (diff === 0) {
      return {
        transform: "translateX(0)",
        opacity: 1,
        zIndex: 3,
      };
    } else if (diff === 1 || diff === slides.length - 1) {
      return {
        transform: `translateX(${diff === 1 ? 10 : -10}%) scale(0.9)`,
        opacity: 0.7,
        zIndex: 2,
      };
    } else if (diff === 2 || diff === slides.length - 2) {
      return {
        transform: `translateX(${diff === 2 ? 20 : -20}%) scale(0.8)`,
        opacity: 0.4,
        zIndex: 1,
      };
    } else {
      return {
        transform: "translateX(0)",
        opacity: 0,
        zIndex: 0,
      };
    }
  };

  const onTouchStart = (e:TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    const startY = touch.clientY;

    const onTouchMove = (e:TouchEvent) => {
      const touch = e.touches[0];
      const currX = touch.clientX;
      const currY = touch.clientY;
      const diffX = currX - startX;
      const diffY = currY - startY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          prev();
        } else {
          next();
        }
      }

      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };

    const onTouchEnd = () => {
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };

    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
  };

  return (
    <div
      className="position-relative h-100 w-100 user-select-none"
      onTouchStart={(e)=>onTouchStart(e as unknown as TouchEvent)}
    >
      <div className="position-relative d-flex h-100 w-100 align-items-center justify-content-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            onMouseEnter={() => setAuto(!autoSlide)}
            onMouseLeave={() => setAuto(autoSlide)}
            className={`position-absolute w-100 transition-transform duration-500`}
            style={getSlideStyle(index)}
          >
            <div className="w-100 mx-auto slide-container">{slide}</div>
          </div>
        ))}
      </div>

      <div className="position-absolute w-100  z-index-5 d-flex align-items-center justify-content-center gap-2 bottom-0 mb-2">
        {/* Flecha izquierda */}
        <button onClick={prev} className="btn bg-transparent p-2 text-dark">
          <ChevronLeft size={40} />
        </button>

        {/* Puntos de paginación */}
        <div className="d-flex align-items-center justify-content-center gap-2 overflow-hidden">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`rounded-circle  transition-all ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: curr === i ? "#ef7f1a" : "#ef7f1a80",
              }}
            />
          ))}
        </div>

        {/* Flecha derecha */}
        <button onClick={next} className="btn bg-transparent p-2 text-dark">
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
