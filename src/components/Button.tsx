import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/button.scss";
import ToolTip, { ttDirection } from "./ToolTip";

type props = {
  variant?: Variant;
  icon?: any;
  value: string;
  style?: Object;
  url?: string;
  title?: string;
  externalURL?: boolean;
  ttValue?: string;
  ttDirection?: ttDirection;
  onClick?: Function
};

const Button: React.FC<props> = ({
  variant = "primary",
  icon,
  value = "Insert a text",
  style,
  url = "/",
  title,
  externalURL = false,
  ttValue,
  ttDirection,
  onClick
}) => {
  return (
    <>
      {!externalURL ? (
        <Link to={url}>
          <button
            onClick={()=> onClick && onClick()}
            className={`${
              variant === "primary" ? "btn-primary" : "btn-secondary"
            } btn `}
            style={style}
          >
            {icon} {value}
            {ttValue && <ToolTip value={ttValue} direction={ttDirection} />}
          </button>
        </Link>
      ) : (
        <a href={url} target="_blank" rel='noreferrer'>
          <button
            onClick={()=> onClick && onClick()}
            className={`${
              variant === "primary" ? "btn-primary" : "btn-secondary"
            } btn `}
            style={style}
          >
            {icon} {value}
            {ttValue && <ToolTip value={ttValue} direction={ttDirection} />}
          </button>
        </a>
      )}
    </>
  );
};
export default Button;

type Variant = "primary" | "secondary";
