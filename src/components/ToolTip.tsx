import React from "react";
import "../assets/styles/components/button.scss";

type props = {
  direction?: ttDirection;
  value?: string;
};

const ToolTip: React.FC<props> = ({ direction = "down", value }) => {
  return <span className={` ${direction} tooltiptext`}>{value}</span>;
};
export default ToolTip;

export type ttDirection = "down" | "top" | "right" | "left";
