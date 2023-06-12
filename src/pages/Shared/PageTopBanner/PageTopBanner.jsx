import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../../../assets/images//banner/breadcrumb.jpg";
const PageTopBanner = ({ title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-center   h-[calc(100vh-50vh)] flex justify-center items-center bg-cover bg-slate-950 bg-blend-overlay bg-opacity-60"
    >
      <div className="flex flex-col justify-center items-center">
        <h1
          data-aos="flip-left"
          className="font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-t from-violet-500 to-pink-600 uppercase"
        >
          {title}
        </h1>
        <div className=" breadcrumbs text-gray-300">
          <ul>
            <li>
              <Link to={"/"}>
                <FaHome className="mr-1" /> Home
              </Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              {title}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTopBanner;
