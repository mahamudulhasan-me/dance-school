import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcrumb = ({ userLabel, currentPage }) => {
  return (
    <>
      <nav
        aria-label="breadcrumb"
        className="w-full p-4 dark:bg-gray-800 dark:text-gray-100"
      >
        <ol className="flex h-8 space-x-2">
          <li className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Back to homepage"
              className="hover:underline"
            >
              <AiFillHome />
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaCaretRight />
            <Link
              rel="noopener noreferrer"
              to={"/dashboard"}
              className="flex items-center px-1 capitalize hover:underline"
            >
              Dashboard
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaCaretRight />
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-1 capitalize hover:underline"
            >
              {userLabel}
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaCaretRight />
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-1 capitalize hover:underline  cursor-default"
            >
              {currentPage}
            </a>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
