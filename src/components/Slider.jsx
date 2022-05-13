import React from "react";
import { useState } from "react";

//Style
import arrowLeft from "../design/arrowLeft.svg";
import arrowRight from "../design/arrowRight.svg";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carrousel">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide carrousel__active-picture"
                : "slide carrousel__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="carrousel__picture" />
            )}
          </div>
        );
      })}
      {/* get button if there are more thant one picture */}
      {length > 1 ? (
        <>
          <div className="carrousel__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="carrousel__previous-icon" />
          </div>
          <div className="carrousel__next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="carrousel__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;