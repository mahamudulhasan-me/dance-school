import React from "react";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FcFeedback, FcHome, FcMusic, FcPhone } from "react-icons/fc";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/icons/light-logo.webp";

const Footer = () => {
  return (
    <footer className="px-8 divide-y bg-violet-800 dark:bg-slate-900 text-gray-100">
      <div className="container grid grid-cols-4 justify-between py-10 mx-auto space-y-8  lg:space-y-0">
        <div className="text-gray-200 mr-4 space-y-4">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <img src={logo} alt="" className="mb-1" />
          </a>
          <p>
            Dance is a wordpress theme that is truly multi-purpose with our way
            of taking care your needs.
          </p>
          <p>
            The barrage of shortcodes that works in the pages, makes it the
            better choice for your business.
          </p>
          <h3 className="text-lg">STAY CONNECTED</h3>
          <div className="flex gap-2">
            <div>
              <Link className="footer-social ">
                <FaDribbble size={22} />
              </Link>
            </div>
            <div>
              <Link className="footer-social ">
                <FaInstagram size={22} />
              </Link>
            </div>
            <div>
              <Link className="footer-social ">
                <FaFacebookF size={22} />
              </Link>
            </div>
            <div>
              <Link className="footer-social ">
                <FaLinkedinIn size={22} />
              </Link>
            </div>
            <div>
              <Link className="footer-social ">
                <FaTwitter size={22} />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-gray-100  gap-x-3 gap-y-8 flex ">
          <div className="space-y-3 w-full">
            <h3 className="uppercase dark:text-gray-50 font-semibold text-lg pb-5">
              Opening Hours
              <div className="w-10 h-1 bg-rose-500 mt-3"></div>
            </h3>
            <div className="flex gap-20 items-start">
              <ul className="space-y-4">
                <li className="flex gap-2 group">
                  <FcMusic
                    size={20}
                    className="group-hover:rotate-12 transition-all "
                  />
                  <span>Hip Hop Dance : 07:00 – 21:00</span>
                </li>
                <li className="flex gap-2 group">
                  <FcMusic
                    size={20}
                    className="group-hover:rotate-12 transition-all "
                  />
                  <span>Ballet : 09:00 – 21:00</span>
                </li>
                <li className="flex gap-2 group">
                  <FcMusic
                    size={20}
                    className="group-hover:rotate-12 transition-all "
                  />
                  <span>Break Dance : 18:00 – 24:00</span>
                </li>
                <li className="flex gap-2 group">
                  <FcMusic
                    size={20}
                    className="group-hover:rotate-12 transition-all "
                  />
                  <span>Salsa : 18:00 – 22:00</span>
                </li>
                <li className="flex gap-2 group">
                  <FcMusic
                    size={20}
                    className="group-hover:rotate-12 transition-all "
                  />
                  <span>Tab Dancing : 19:00 – 23:00</span>
                </li>
                <li className="flex gap-2 group">
                  <FcMusic
                    size={20}
                    className="group-hover:rotate-12 transition-all "
                  />
                  <span>Cha Cha : 20:00 – 23:00</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex gap-2 group">
                  <FcMusic
                    size={20}
                    className="group-hover:rotate-12 transition-all "
                  />
                  <span>Corridos : 07:00 – 21:00</span>
                </li>
                <li className="flex gap-2 group">
                  <FcMusic
                    size={20}
                    className="group-hover:rotate-12 transition-all "
                  />
                  <span>Cumbia : 09:00 – 21:00</span>
                </li>
                <li className="flex gap-2 group">
                  <FcMusic
                    size={20}
                    className="group-hover:rotate-12 transition-all "
                  />
                  <span>Duranguense : 18:00 – 24:00</span>
                </li>
                <li className="flex gap-2 group">
                  <FcMusic
                    size={20}
                    className="group-hover:rotate-12 transition-all "
                  />
                  <span>Quebradita : 18:00 – 22:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-gray-50">
          <h3 className="uppercase dark:text-gray-50 font-semibold text-lg mb-5">
            Contact Us
            <div className="w-10 h-1 bg-rose-500 mt-3"></div>
          </h3>
          <p className="flex gap-3 ">
            <FcHome size={30} />
            <span>
              72 Pilgrim Avenue, Chevy Chase, <br /> MD 20815
            </span>
          </p>
          <p className="flex gap-3 ">
            <FcPhone size={30} />
            <span>
              (226) 906-2721 <br />
              (671) 925-1352
            </span>
          </p>
          <p className="flex gap-3  ">
            <FcFeedback size={30} /> <span>info@dance.com</span>
          </p>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        Copyright © 2019. All rights reserved by,{" "}
        <span className="hover:text-rose-600">Mahmudul Hasan</span>
      </div>
    </footer>
  );
};

export default Footer;
