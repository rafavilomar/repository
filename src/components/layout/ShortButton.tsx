import React from "react";
import IconButton from "../IconButton";
import "../../assets/styles/components/layout/shortButton.scss";

import { shortButton } from "../../helpers/home";

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
        />
      ))}
    </section>
  );
};
export default ShortButton;
