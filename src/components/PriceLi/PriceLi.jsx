import React from "react";
import { FaCheck } from "react-icons/fa";

const PriceLi = ({ value }) => {
  return (
    <li className="flex items-center gap-2 font-semibold text-gray-700 group-hover:text-white dark:text-white ">
      <FaCheck /> {value}
    </li>
  );
};

export default PriceLi;
