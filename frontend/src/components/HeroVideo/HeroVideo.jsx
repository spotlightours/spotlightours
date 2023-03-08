import React from "react";
import video from "../.././assets/video.mp4";
import "./heroVideo.css";

const HeroVideo = () => {
  return (
    <div className="slider">
      <video src={video} autoPlay loop muted></video>
      <div className="slider__content">
        <h1 className="slider__content__title">Best Desert Safaris</h1>
        <p className="slider__content__text">
          Don’t miss our popular Evening Desert Safari
          <button className="slider__content__btn">Book Now</button>
        </p>
      </div>
    </div>
  );
};

export default HeroVideo;
