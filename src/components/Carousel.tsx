import React from "react";
import { Globe } from "react-ionicons";
import "../assets/styles/components/carousel.scss";
import Button from "./Button";
import IconButton from "./IconButton";

const Carousel = () => {
  return (
    <section className="carrousel scrollHorizontal">
      <div className="carrousel__container">
        {[1, 1, 1, 1, 1, 1].map(() => (
          <div className="carrousel-item">
            <img
              className="carrousel-item__image"
              src="https://cdn.dribbble.com/users/3582616/screenshots/14512060/media/973c4ccd1c030405d42f41bb47b7bf2b.png?compress=1&resize=400x300"
              alt="people"
            />
            <div className="carrousel-item__details">
              <h5 className="txt subtitle">Project Name </h5>
              <div>
                <IconButton
                  style={{ height: 25, width: 25 }}
                  variant="secondary"
                  icon={<Globe />}
                />
                <Button
                  value="See more"
                  style={{
                    height: 25,
                    width: "100%",
                    minWidth: 0,
                    fontSize: 12,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Carousel;
