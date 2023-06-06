import React from "react";
import slider2 from "../../../assets/images/banner/slider2-1.jpg";
import "./Styles.css";
const Banner = () => {
  return (
    <div className="header-wrapper h-screen">
      <div
        className="zoominheader h-screen bg-cover"
        style={{ backgroundImage: `url(${slider2})` }}
      >
        <div className="zoomoutheader">
          <p className="text"> Hello, this is a text!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
