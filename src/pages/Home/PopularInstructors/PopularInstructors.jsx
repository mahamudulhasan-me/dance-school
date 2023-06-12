import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import training from "../../../assets/images/training-1-1.png";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import Award from "./Award";

const PopularInstructors = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["all-instructors"],
    queryFn: async () => {
      const res = await axios.get(
        "https://dance-school-server-roan.vercel.app/instructor"
      );
      return res.data;
    },
  });
  return (
    <>
      <div className="md:grid grid-cols-12 px-5 py-10 bg-rose-50 dark:bg-slate-800">
        <div className="col-span-5">
          <img src={training} alt="" data-aos="fade-right" />

          <div className="ml-5 mr-2" data-aos="fade-right">
            <p className="font-nunito text-xl mb-8 text-gray-600 dark:text-gray-200 tracking-widest  font-semibold">
              Training the dancers goes on in our Academy on a regular basis.
              You can enroll for a part-time or full-time program.
            </p>
            <SectionHead title={"Our Award"} />
            <Award />
          </div>
        </div>
        <div className="col-span-7 mt-12">
          <SectionHead title={"Popular Instructor"} />
          <div className="md:grid grid-cols-3 gap-6 -mt-4 items-end">
            {instructors.map((instructor) => (
              <div
                data-aos="zoom-in"
                key={instructor._id}
                className="mt-2 hover:mt-0 mb-8 md:mb-0 hover:duration-300 duration-300 hover:mb-2 group  dark:border-transparent dark:border-[#e2e8f0] px-3 pt-3 rounded-md group bg-white  dark:bg-slate-900"
              >
                <div className="relative overflow-hidden ">
                  <img
                    src={instructor.photoUrl}
                    alt=""
                    className="rounded-md group-hover:scale-110 duration-700 "
                  />
                  <div className="absolute bg-violet-700 hidden group-hover:flex top-0 right-0 bottom-0 left-0 bg-opacity-70 duration-1000 ease-in justify-evenly items-center gap-1 text-2xl text-white">
                    <Link>
                      <FaFacebook />
                    </Link>
                    <Link>
                      <FaInstagram />
                    </Link>
                    <Link>
                      <FaTwitter />
                    </Link>
                    <Link>
                      <FaTiktok />
                    </Link>
                  </div>
                </div>
                <div className="font-nunito">
                  <div className="border-l-4 border-violet-700 group-hover:border-rose-600 duration-200 pl-1 rounded-l-md mt-5">
                    <p className="font-bold text-xl dark:text-slate-200">
                      {instructor.name}
                    </p>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Dancer/Instructor
                    </p>
                    <p className=" font-semibold text-gray-500 dark:text-gray-400">
                      <span>Classes: {instructor.totalClasses}</span>{" "}
                      <span>Students: {instructor.totalEnrollmentStudent}</span>
                    </p>
                  </div>
                  <div className="bg-violet-600 py-2 -mx-3 rounded-b-md border-b-2 border-rose-600 text-center text-white font-semibold pt-1 mt-2">
                    See Classes
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularInstructors;
