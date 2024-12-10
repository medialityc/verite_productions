const images = [
  {
    src: "/assets/img/studio/planos1.PNG",
  },
  {
    src: "/assets/img/studio/planos2.PNG",
  },
];

const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

function nextImageUrl(src: string, size: number) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
}

const slides = images.map(({ src }) => ({
  src: src,
  //   srcSet: [...imageSizes, ...deviceSizes]
  //     .filter((size) => size <= width)
  //     .map((size) => ({
  //       src: nextImageUrl(src, size),
  //       width: size,
  //       height: Math.round((height / width) * size),
  //     })),
}));

export default slides;
