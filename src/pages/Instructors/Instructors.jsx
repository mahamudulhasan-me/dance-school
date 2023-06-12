import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaRegHeart,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PageTopBanner from "../Shared/PageTopBanner/PageTopBanner";
import SectionHead from "../Shared/SectionHead/SectionHead";

const Instructors = () => {
  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["all-instructors"],
    queryFn: async () => {
      const res = await axios.get(
        "https://dance-school-server-roan.vercel.app/instructor"
      );
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Instructor | Dance School</title>
      </Helmet>
      <PageTopBanner title="Instructors" />
      <div className="p-[10%] mx-auto py-14 dark:bg-slate-800">
        <SectionHead title={<span>All Instructors</span>} />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="md:grid grid-cols-4 gap-7">
            {instructors.map((instructor) => (
              <div
                key={instructor._id}
                className="mt-2 hover:mt-0 mb-8 md:mb-0 duration-300 md:hover:mb-2 group border  dark:border-transparent dark:border-[#e2e8f0] px-3 pt-3 rounded-md group bg-white  dark:bg-slate-900 flex flex-col  justify-between"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={instructor.photoUrl}
                    alt=""
                    className="rounded-md group-hover:scale-110 duration-500 "
                  />
                  <div className="absolute bg-violet-700 hidden group-hover:flex top-0 right-0 bottom-0 left-0 bg-opacity-70 duration-500 ease-in justify-evenly items-center gap-1 text-2xl text-white">
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
                <div className="font-nunito  ">
                  <div className="border-l-4 border-violet-700 group-hover:border-rose-600 duration-200 pl-1 rounded-l-md mt-5">
                    <p className="font-bold text-xl dark:text-slate-200">
                      {instructor.name}
                    </p>
                    <div className=" font-semibold text-gray-500 dark:text-gray-400">
                      <p className="text-sm">Dancer/Instructor</p>
                      <p>
                        <span>Classes: {instructor.totalClasses}</span>{" "}
                        <span>
                          Students: {instructor.totalEnrollmentStudent}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className=" font-semibold text-gray-600 dark:text-gray-200 my-4">
                    <div className="flex items-center gap-2 ">
                      <button className="flex  items-center border border-violet-700 gap-1 py-1 px-2 ">
                        <FaRegHeart size={20} color="red" /> Like
                      </button>
                      <button className="flex  items-center border-violet-700 border gap-1 py-1 px-2">
                        <FaTiktok size={20} color="#ff0050" /> Follow
                      </button>
                    </div>
                    <p className="flex  items-center gap-1">
                      <FaEnvelope size={16} />
                      {instructor.email}
                    </p>
                  </div>
                  <div className="bg-violet-600 py-1 -mx-3 rounded-b-md border-b-2 border-rose-600 text-center text-white font-semibold pt-1 mt-2">
                    See Classes
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Instructors;
