import React from "react";
import { RotatingLines } from "react-loader-spinner";
const LoadingSpinner2 = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <RotatingLines
        strokeColor="#6d28d9"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner2;
