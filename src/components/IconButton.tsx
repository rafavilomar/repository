import React from "react";

import "../assets/styles/components/button.scss";

type props = {
  variant?: Variant;
  icon: any;
  style?: Object;
};

const IconButton: React.FC<props> = ({
  variant = "primary",
  icon,
  style
}) => {
  return (
    <button
      className={`${
        variant === "primary" ? "btnIcon-primary" : "btnIcon-secondary"
      } btn btnIcon `}
      style={style}
    >
      {icon}
    </button>
  );
};
export default IconButton;

type Variant = "primary" | "secondary";