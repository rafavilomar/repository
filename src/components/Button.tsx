import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/button.scss";

type props = {
  variant?: Variant;
  icon?: any;
  value: string;
  style?: Object;
  url?: string;
  title?: string;
  externalURL?: boolean;
};

const Button: React.FC<props> = ({
  variant = "primary",
  icon,
  value = "Insert a text",
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
            title={title}
            className={`${
              variant === "primary" ? "btn-primary" : "btn-secondary"
            } btn `}
            style={style}
          >
            {icon} {value}
          </button>
        </Link>
      ) : (
        <a href={url} target="_blank" rel='noreferrer'>
          <button
            title={title}
            className={`${
              variant === "primary" ? "btn-primary" : "btn-secondary"
            } btn `}
            style={style}
          >
            {icon} {value}
          </button>
        </a>
      )}
    </>
  );
};
export default Button;

type Variant = "primary" | "secondary";
