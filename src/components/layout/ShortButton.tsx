import React from "react";
import IconButton from "../IconButton";
import "../../assets/styles/components/layout/shortButton.scss";

import { shortButton } from "../../helpers/home";
import { actionButton } from "../../helpers/analytics";

const ShortButton = () => {
  return (
    <section className="shortButton">
      {shortButton.map((e) => (
        <IconButton
          key={e.title}
          icon={e.icon}
          url={e.url}
          title={e.title}
          externalURL={e.externalURL}
          style={{height: 45, width: 45}}
          ttDirection='left'
          ttValue={e.title}
          onClick={() =>
            actionButton("Icon button", e.title)
          }
        />
      ))}
    </section>
  );
};
export default ShortButton;
