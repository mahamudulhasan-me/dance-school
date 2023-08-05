import React from "react";
import { FaCheck } from "react-icons/fa";

const PriceLi = ({ value }) => {
  return (
    <li className="flex items-center gap-2">
      <FaCheck /> {value}
    </li>
  );
};

export default PriceLi;
