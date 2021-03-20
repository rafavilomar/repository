import React from "react";

import "../assets/styles/components/button.scss";

type props = {
  variant?: Variant;
  icon: any;
};

const IconButton: React.FC<props> = ({
  variant = "primary",
  icon,
}) => {
  return (
    <button
      className={`${
        variant === "primary" ? "btnIcon-primary" : "btnIcon-secondary"
      } btn btnIcon `}
    >
      {icon}
    </button>
  );
};
export default IconButton;

type Variant = "primary" | "secondary";