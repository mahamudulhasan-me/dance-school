import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import tableBG from "../../../assets/images/table-bg.png";
const PriceCard = ({ classCount, price, features, duration }) => {
  const bg = {
    backgroundImage: `url(${tableBG})`,
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration={duration}
      className={`group bg-white  hover:bg-slate-950 dark:bg-slate-900  p-10 flex flex-col justify-between  hover:bg-priceCardBG dark:text-white `}
    >
      <div>
        <div className="border-b pb-8">
          <h3 className="text-xl uppercase font-semibold text-gray-700 dark:text-white  group-hover:text-white">
            {classCount} Class A Week
          </h3>
          <p className="text-gray-600 group-hover:text-white dark:text-white ">
            Billed annually or ${parseInt(price / 12)} monthly
          </p>
          <h1 className="text-4xl text-slate-700 group-hover:text-white dark:text-white  font-semibold ">
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
