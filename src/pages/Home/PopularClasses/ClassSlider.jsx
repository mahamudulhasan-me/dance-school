import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {
  FaCartPlus,
  FaGg,
  FaRegBookmark,
  FaStar,
  FaStarHalf,
  FaUsers,
} from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
const ClassSlider = () => {
  const { data: popularClasses = [] } = useQuery({
    queryKey: ["popular-classes"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/popular-classes`);
      return res.data;
    },
  });
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {popularClasses.map((popularClass) => (
          <SwiperSlide key={popularClass._id}>
            <div
              className={`${
                popularClass.availableSeat === 0 ? "bg-rose-300" : "bg-gray-50"
              } p-5 font-nunito font-semibold hover:scale-105 duration-300 hover:shadow-2xl rounded-lg`}
            >
              <img src={popularClass.image} alt="" className="rounded-md" />
              <div className="mt-4">
                <div className="flex justify-between items-center ">
                  <p className="flex items-center text-orange-600">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                    <span className="text-gray-600">(10 reviews)</span>
                  </p>
                  <FaRegBookmark size={24} />
                </div>
                <h1 className="text-2xl font-bold mt-4 text-slate-950">
                  {popularClass.name}
                </h1>
                <div className="text-gray-600">
                  <div className="flex items-center gap-4 text-sm font-bold">
                    <p className="flex  items-center  gap-1">
                      <IoMdStopwatch /> 26 Hours
                    </p>
                    <p className="flex  items-center gap-1">
                      <FaUsers />
                      <span> {popularClass.enrolledStudent} Students</span>
                    </p>
                  </div>

                  <p
                    className={`flex  items-center gap-1 text-sm ${
                      popularClass.availableSeat === 0 ? "text-rose-600" : ""
                    }`}
                  >
                    <FaGg />
                    <span> {popularClass.availableSeat} seats available</span>
                  </p>

                  {/* <p className="text-lg text-justify mt-1 mb-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor mollitia, ut qui cupiditate a ratione.
                  </p> */}
                  <div className="flex items-center text-lg font-semibold gap-3 mt-4">
                    <img
                      src={popularClass.instructorImage}
                      className="w-9 h-9 rounded-full p-0.5 ring ring-gray-200"
                      alt=""
                    />
                    <p>
                      by{" "}
                      <span className="text-gray-900 font-semibold">
                        {popularClass.instructorName}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between  items-center border-t mt-4 pt-2">
                    <p className=" text-xl font-roboto">
                      <span className=" text-gray-800 font-bold ">
                        ${popularClass.price - 10}
                      </span>
                      <span className="line-through text-gray-500 font-normal ml-2 text-lg">
                        ${popularClass.price}
                      </span>
                    </p>
                    <Link
                      to={"/classes"}
                      className="flex items-center gap-2 font-semibold hover:text-violet-700"
                    >
                      <FaCartPlus /> Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="group border">
            <img src={class1} alt="" />
            <div className="text-center mt-8">
              <div className="mb-5">
                <h3 className="text-xl text-gray-800">American Rhythm</h3>
                <div className="w-12 mx-auto h-0.5 bg-violet-700 mt-4 group-hover:w-24 duration-300 hover:duration-300 hover:transition-all transition-all "></div>
              </div>
              <p>
                <span className="text-gray-500">Instructor:</span>{" "}
                <span className="text-gray-800">Mahmudul Hasan</span>{" "}
              </p>
              <p>
                <span className="text-gray-500">Available Seat:</span>{" "}
                <span className="text-gray-800">23</span>{" "}
              </p>
            </div>
            <div className="mt-3 flex justify-between items-center text-center text-white font-semibold text-lg">
              <p className="bg-slate-950 w-1/2 py-3 ">$60</p>
              <p className="bg-violet-700 w-1/2 py-3 font-normal">View Class</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group border">
            <img src={class1} alt="" />
            <div className="text-center mt-8">
              <div className="mb-5">
                <h3 className="text-xl text-gray-800">American Rhythm</h3>
                <div className="w-12 mx-auto h-0.5 bg-violet-700 mt-4 group-hover:w-24 duration-300 hover:duration-300 hover:transition-all transition-all "></div>
              </div>
              <p>
                <span className="text-gray-500">Instructor:</span>{" "}
                <span className="text-gray-800">Mahmudul Hasan</span>{" "}
              </p>
              <p>
                <span className="text-gray-500">Available Seat:</span>{" "}
                <span className="text-gray-800">23</span>{" "}
              </p>
            </div>
            <div className="mt-3 flex justify-between items-center text-center text-white font-semibold text-lg">
              <p className="bg-slate-950 w-1/2 py-3 ">$60</p>
              <p className="bg-violet-700 w-1/2 py-3 font-normal">View Class</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group border">
            <img src={class1} alt="" />
            <div className="text-center mt-8">
              <div className="mb-5">
                <h3 className="text-xl text-gray-800">American Rhythm</h3>
                <div className="w-12 mx-auto h-0.5 bg-violet-700 mt-4 group-hover:w-24 duration-300 hover:duration-300 hover:transition-all transition-all "></div>
              </div>
              <p>
                <span className="text-gray-500">Instructor:</span>{" "}
                <span className="text-gray-800">Mahmudul Hasan</span>{" "}
              </p>
              <p>
                <span className="text-gray-500">Available Seat:</span>{" "}
                <span className="text-gray-800">23</span>{" "}
              </p>
            </div>
            <div className="mt-3 flex justify-between items-center text-center text-white font-semibold text-lg">
              <p className="bg-slate-950 w-1/2 py-3 ">$60</p>
              <p className="bg-violet-700 w-1/2 py-3 font-normal">View Class</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group border mb-12">
            <img src={class1} alt="" />
            <div className="text-center mt-8">
              <div className="mb-5">
                <h3 className="text-xl text-gray-800">American Rhythm</h3>
                <div className="w-12 mx-auto h-0.5 bg-violet-700 mt-4 group-hover:w-24 duration-300 hover:duration-300 hover:transition-all transition-all "></div>
              </div>
              <p>
                <span className="text-gray-500">Instructor:</span>{" "}
                <span className="text-gray-800">Mahmudul Hasan</span>{" "}
              </p>
              <p>
                <span className="text-gray-500">Available Seat:</span>{" "}
                <span className="text-gray-800">23</span>{" "}
              </p>
            </div>
            <div className="mt-3 flex justify-between items-center text-center text-white font-semibold text-lg">
              <p className="bg-slate-950 w-1/2 py-3 ">$60</p>
              <p className="bg-violet-700 w-1/2 py-3 font-normal">View Class</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group border">
            <img src={class1} alt="" />
            <div className="text-center mt-8">
              <div className="mb-5">
                <h3 className="text-xl text-gray-800">American Rhythm</h3>
                <div className="w-12 mx-auto h-0.5 bg-violet-700 mt-4 group-hover:w-24 duration-300 hover:duration-300 hover:transition-all transition-all "></div>
              </div>
              <p>
                <span className="text-gray-500">Instructor:</span>{" "}
                <span className="text-gray-800">Mahmudul Hasan</span>{" "}
              </p>
              <p>
                <span className="text-gray-500">Available Seat:</span>{" "}
                <span className="text-gray-800">23</span>{" "}
              </p>
            </div>
            <div className="mt-3 flex justify-between items-center text-center text-white font-semibold text-lg">
              <p className="bg-slate-950 w-1/2 py-3 ">$60</p>
              <p className="bg-violet-700 w-1/2 py-3 font-normal">View Class</p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default ClassSlider;
