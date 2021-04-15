import React from "react";

type props = {
    src: any,
    alt: string
  };

const Images: React.FC<props> = ({src, alt}) => {
  return <img src={src} alt={alt} />;
};
export default Images;
