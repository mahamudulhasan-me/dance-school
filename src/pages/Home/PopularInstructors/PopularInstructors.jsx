import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionHead from "../../Shared/SectionHead/SectionHead";

const PopularInstructors = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["all-instructors"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/instructor");
      return res.data;
    },
  });
  return (
    <>
      <div className="px-[10%]  py-14 ">
        <SectionHead title={<span>All Instructors</span>} />
        <div className="grid grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="mt-2 hover:mt-0 duration-300 hover:mb-2  border p-3 rounded-md group"
            >
              <div className="relative overflow-hidden ">
                <img
                  src={instructor.photoUrl}
                  alt=""
                  className="rounded-md group-hover:scale-110 duration-700"
                />
                <div className="absolute bg-violet-700 hidden group-hover:flex top-0 right-0 bottom-0 left-0 bg-opacity-70 rounded-md duration-1000 ease-in justify-evenly items-center gap-1 text-2xl text-white">
                  <Link>
                    <FaFacebook />
                  </Link>
                  <Link>
                    {" "}
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
                <div className="border-l-4 border-violet-700 pl-2 rounded-l-md mt-5">
                  <p className="font-bold text-xl">{instructor.name}</p>
                  <p className="text-sm font-semibold font-roboto">
                    Dancer/Instructor
                  </p>
                  <p className="text-sm font-semibold font-roboto">
                    <span>Total Class: {instructor.totalClasses}</span>{" "}
                    <span>
                      Total Student: {instructor.totalEnrollmentStudent}
                    </span>
                  </p>
                </div>
                <p>{instructor.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularInstructors;
