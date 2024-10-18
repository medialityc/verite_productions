import { useState, useEffect } from "react";

export interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides?: React.ReactNode[];
}

/**
 * Carousel component with Bootstrap styles and TypeScript support.
 *
 * @param {CarouselProps} props - The props for the carousel component.
 * @param {boolean} [props.autoSlide=false] - Whether the carousel should auto-slide.
 * @param {number} [props.autoSlideInterval=3000] - Interval for auto-sliding.
 * @param {React.ReactNode[]} [props.slides] - Elements to display in the carousel.
 * @returns {React.ReactElement} The carousel component.
 */
export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides = [
    <div className="h-24 w-full rounded bg-secondary text-white d-flex justify-content-center align-items-center">
      1
    </div>,
    <div className="h-24 w-full rounded bg-secondary text-white d-flex justify-content-center align-items-center">
      2
    </div>,
    <div className="h-24 w-full rounded bg-secondary text-white d-flex justify-content-center align-items-center">
      3
    </div>,
    <div className="h-24 w-full rounded bg-secondary text-white d-flex justify-content-center align-items-center">
      4
    </div>,
  ],
}: CarouselProps) {
  const [curr, setCurr] = useState(0);
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

  const getSlideStyle = (index: number) => {
    const diff = (index - curr + slides.length) % slides.length;

    if (diff === 0) {
      return {
        transform: "translateX(0)",
        opacity: 1,
        zIndex: 3,
        display: "block",
      };
    } else {
      return {
        transform: "translateX(0)",
        opacity: 0,
        zIndex: 0,
        display: "none",
      };
    }
  };

  const onTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    const startY = touch.clientY;

    const onTouchMove = (e: TouchEvent) => {
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

  return <div
    className="position-relative w-100 h-100 overflow-hidden"
    onTouchStart={(e) =>onTouchStart(e as unknown as TouchEvent)}
  >
    <div className="d-flex justify-content-center align-items-center h-100 w-100 position-relative">
      {slides.map((slide, index) => <div
          key={index}
          onMouseEnter={() => setAuto(!autoSlide)}
          onMouseLeave={() => setAuto(autoSlide)}
          className={`position-absolute w-100 h-100`}
          style={getSlideStyle(index)}
        >
          <div className="w-100 h-100">{slide}</div>
        </div>)}
    </div>

    {/* Arrows positioned together in the bottom right corner */}
    <div
      className="position-absolute bottom-0 end-0 d-flex gap-2 m-3"
      style={{ zIndex: 4 }}
    >
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="d-flex justify-content-center align-items-center bg-black text-white "
        aria-label="Previous slide"
        style={{
          width: "48px",
          height: "36px",
          borderRadius: "20%",

        }}
      >
        <i className="fa fa-arrow-left arrow-btn  orange" />
      </button>
      <button
        onClick={next}
        className="d-flex justify-content-center align-items-center bg-black text-white"
        aria-label="Next slide"
        style={{
          width: "48px",
          height: "36px",
          borderRadius: "20%",

        }}
      >
        <i className="fa fa-arrow-right  arrow-btn-next  orange  w-100" />
      </button>
    </div>
  </div>;
}
