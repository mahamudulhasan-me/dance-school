import React from "react";
import { NavLink } from "react-router-dom";

const AdminActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "bg-gray-800 dark:text-gray-50 " : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default AdminActiveLink;
