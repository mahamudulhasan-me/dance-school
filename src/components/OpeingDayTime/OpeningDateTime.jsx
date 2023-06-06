import React from "react";

const OpeningDayTime = ({ day, time }) => {
  return (
    <>
      <p className="flex justify-between items-center border-b border-dashed border-gray-500 pb-2">
        <span className="text-gray-500">{day}</span>
        <span className="font-semibold text-gray-700">{time}</span>
      </p>
    </>
  );
};

export default OpeningDayTime;
