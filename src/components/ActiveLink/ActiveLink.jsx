import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? " bg-gradient-to-t from-violet-500 to-pink-600  rounded-md hover:text-white"
          : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
