import React from "react";
import GridLoader from "react-spinner";
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <GridLoader color="#6d28d9" />
    </div>
  );
};

export default LoadingSpinner;
