import React from "react";

interface CardProps {
  index: number;
  src: string;
  alt: string;
}

const Card = ({ index, src, alt }: CardProps) => {
  return (
    <img
      key={index}
      src={src}
      alt={alt}
      className=" w-100 h-100"
      style={{ width: "240px", height: "200px", borderRadius: "20px" }}
    />
  );
};

export default Card;
