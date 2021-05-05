import React from "react";

type props = {
    src: any,
    alt: string,
    className?: string
  };

const Images: React.FC<props> = ({src, alt, className}) => {
  return <img src={src} alt={alt} className={className} />;
};
export default Images;
