import React from "react";

import "../assets/styles/components/button.scss";

type props = {
  variant?: Variant;
  icon?: any;
  value: string;
  style?: Object;
};

const Button: React.FC<props> = ({
  variant = "primary",
  icon,
  value = "Insert a text",
  style
}) => {
  return (
    <button
      className={`${
        variant === "primary" ? "btn-primary" : "btn-secondary"
      } btn `}
      style={style}
    >
      {icon} {value}
    </button>
  );
};
export default Button;

type Variant = "primary" | "secondary";
