import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/button.scss";

type props = {
  variant?: Variant;
  icon: any;
  style?: Object;
  url?: string;
  title?: string;
  externalURL?: boolean;
};

const IconButton: React.FC<props> = ({
  variant = "primary",
  icon,
  style,
  url = "/",
  title,
  externalURL = false,
}) => {
  return (
    <>
      {!externalURL ? (
        <Link to={url}>
          <button
            className={`${
              variant === "primary" ? "btnIcon-primary" : "btnIcon-secondary"
            } btn btnIcon `}
            style={style}
          >
            {icon}
          </button>
        </Link>
      ) : (
        <a href={url} target="_blank" rel="noreferrer">
          <button
            className={`${
              variant === "primary" ? "btnIcon-primary" : "btnIcon-secondary"
            } btn btnIcon `}
            style={style}
          >
            {icon}
          </button>
        </a>
      )}
    </>
  );
};
export default IconButton;

type Variant = "primary" | "secondary";
