"use client";
import { useEffect, useState } from "react";

export default function BackToTop({ target }: { target: string }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const targetElement = document.querySelector(target) as HTMLElement;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {hasScrolled && (
        <div id="progress" onClick={handleClick} style={{ display: "grid" }}>
          <span id="valiu">
            <i className="fas fa-arrow-up"></i>
          </span>
        </div>
      )}
    </>
  );
}
