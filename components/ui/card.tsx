import React from "react";
import Image from 'next/image'

interface CardProps {
  index: number;
  src: string;
  alt: string;
}

const Card = ({ index, src, alt }: CardProps) => {
  return (
    <Image
          src={src}
          alt={"mock-banner"}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
  );
};

export default Card;
