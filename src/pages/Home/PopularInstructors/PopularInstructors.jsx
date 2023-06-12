import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import training from "../../../assets/images/training-1-1.png";
import SectionHead from "../../Shared/SectionHead/SectionHead";
// import required modules
import { Autoplay } from "swiper";

import award1 from "../../../assets/images/award/partner1.jpg";
import award2 from "../../../assets/images/award/partner2.jpg";
import award3 from "../../../assets/images/award/partner3.jpg";
import award4 from "../../../assets/images/award/partner4.jpg";
import award5 from "../../../assets/images/award/partner5.jpg";
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
      <div className="grid grid-cols-12 px-5 py-10 bg-rose-50 dark:bg-slate-800">
        <div className="col-span-5 ">
          <img src={training} alt="" data-aos="fade-right" />

          <div className="ml-5 mr-2" data-aos="fade-right">
            <p className="font-nunito text-xl mb-8 text-gray-600 dark:text-gray-200 tracking-widest  font-semibold">
              Training the dancers goes on in our Academy on a regular basis.
              You can enroll for a part-time or full-time program.
            </p>
            <SectionHead title={"Our Award"} />
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={true}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={award1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={award2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={award3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={award4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={award5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={award1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={award2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={award3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="col-span-7 mt-12">
          <SectionHead title={"Popular Instructor"} />
          <div className=" grid grid-cols-3 gap-6 -mt-4 items-end">
            {instructors.map((instructor) => (
              <div
                data-aos="zoom-in"
                key={instructor._id}
                className="mt-2 hover:mt-0 duration-300 hover:mb-2 group  dark:border-transparent dark:border-[#e2e8f0] px-3 pt-3 rounded-md group bg-white  dark:bg-slate-900"
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
                  <div className="bg-violet-600 -mx-3 rounded-b-md border-b-2 border-rose-600 text-center text-white font-semibold pt-1 mt-2">
                    View Profile
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
