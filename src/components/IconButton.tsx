import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/button.scss";
import ToolTip, { ttDirection } from "./ToolTip";

type props = {
  variant?: Variant;
  icon: any;
  style?: Object;
  url?: string;
  title?: string;
  externalURL?: boolean;
  ttValue?: string;
  ttDirection?: ttDirection
  onClick?: Function
};

const IconButton: React.FC<props> = ({
  variant = "primary",
  icon,
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
              variant === "primary" ? "btnIcon-primary" : "btnIcon-secondary"
            } btn btnIcon `}
            style={style}
          >
            {icon}
            {ttValue && <ToolTip value={ttValue} direction={ttDirection} />}
          </button>
        </Link>
      ) : (
        <a href={url} target="_blank" rel="noreferrer">
          <button
            onClick={()=> onClick && onClick()}
            className={`${
              variant === "primary" ? "btnIcon-primary" : "btnIcon-secondary"
            } btn btnIcon `}
            style={style}
          >
            {icon}
            {ttValue && <ToolTip value={ttValue} direction={ttDirection} /> }
          </button>
        </a>
      )}
    </>
  );
};
export default IconButton;

type Variant = "primary" | "secondary";
