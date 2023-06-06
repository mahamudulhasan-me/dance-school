import React from "react";
import slider2 from "../../../assets/images/banner/slider2-1.jpg";
import "./Styles.css";
const Banner = () => {
  return (
    <div className="header-wrapper h-screen">
      <div
        className="zoominheader h-screen bg-cover"
        style={{ backgroundImage: `url(${slider2})` }}
      ></div>
      <div className="absolute top-1/2 px-[10%]">
        <h3 className="text-white  text-4xl">Be in the</h3>
        <h1 className="text-8xl font-semibold text-violet-700 uppercase">
          SpotLight
        </h1>
      </div>
    </div>
  );
};

export default Banner;
