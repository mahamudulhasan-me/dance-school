import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const PriceCard = ({ classCount, price, features }) => {
  return (
    <div className="bg-white p-10 flex flex-col justify-between">
      <div>
        <div className="border-b pb-8">
          <h3 className="text-xl uppercase">{classCount} Class A Week</h3>
          <p>Billed annually or ${parseInt(price / 12)} monthly</p>
          <h1 className="text-4xl text-slate-900 font-semibold">
            ${price} /<span className="text-lg">Year</span>
          </h1>
        </div>
        <ul className="my-8 space-y-3">{features}</ul>
      </div>

      <button className=" w-full text-white text-xl  bg-violet-600 hover:bg-violet-700  hover:transition-all hover:duration-150 transition-all duration-300 flex items-center justify-center gap-2 py-2 group">
        Enroll Now{" "}
        <HiArrowNarrowRight className=" transition-all duration-300 " />
      </button>
    </div>
  );
};

export default PriceCard;
