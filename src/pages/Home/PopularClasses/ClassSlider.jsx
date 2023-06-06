import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import class1 from "../../../assets/images/classes/classes1.jpg";
const ClassSlider = () => {
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
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ClassSlider;
