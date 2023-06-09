import React from "react";
import { RotatingLines } from "react-loader-spinner";
const LoadingSpinner = () => {
  return (
    <div className=" flex justify-center items-center">
      <RotatingLines
        strokeColor="#6d28d9"
        strokeWidth="5"
        animationDuration="0.75"
        width="70"
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
