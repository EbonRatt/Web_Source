import React, { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imageIndex, setImgIndex] = useState(null);

  function changeSlide(direction) {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImgIndex(images.length - 1);
      } else {
        setImgIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex(imageIndex + 1);
      }
    }
  }
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div
            className="arrow"
            onClick={() => {
              changeSlide("left");
            }}
          >
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div
            className="arrow"
            onClick={() => {
              changeSlide("right");
            }}
          >
            <img src="/arrow.png" className="right" alt="" />
          </div>
          <div
            className="close"
            onClick={() => {
              setImgIndex(null);
            }}
          >
            X
          </div>
        </div>
      )}

      <div className="bigImages">
        <img
          src={images[0]}
          alt=""
          onClick={() => {
            setImgIndex(0);
          }}
        />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            onClick={() => {
              setImgIndex(index + 1);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
