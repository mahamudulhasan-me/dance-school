import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";
import slider1 from "../../../assets/images/banner/slider1-1.jpg";
import slider2 from "../../../assets/images/banner/slider2-1.jpg";
import "./Styles.css";
const Banner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        // autoplay={{
        //   delay: 20000,
        //   disableOnInteraction: false,
        // }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="header-wrapper ">
            <div
              className="bg-center zoominheader h-[calc(100vh+5rem)] bg-cover"
              style={{ backgroundImage: `url(${slider2})` }}
            ></div>
            <div className="absolute top-1/4 px-[10%]">
              <h3 className="text-white  text-4xl">Be in the</h3>
              <h1
                data-aos="flip-left"
                className="font-extrabold text-transparent md:text-8xl text-5xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 uppercase"
              >
                SpotLight
              </h1>
              <p className="text-white italic text-lg font-nunito -mt-4 tracking-[0.2rem]">
                Learn from the Best - Dance Profession
              </p>
              <div className="text-white  uppercase mt-8 space-y-5 font-nunito">
                <h5 className="flex justify-between text-xl items-center">
                  <span>
                    Hip-hop dance
                    <span className="tracking-[0.2rem] text-2xl ">
                      {" "}
                      ----------
                    </span>
                  </span>
                  <span className="lowercase">199.00/mon</span>
                </h5>
                <h5 className=" flex justify-between text-xl items-center">
                  <span>
                    Ballet
                    <span className="tracking-[0.2rem] text-xl">
                      {" "}
                      ------------------
                    </span>
                  </span>
                  <span className="lowercase">299.00/mon</span>
                </h5>
                <h5 className=" flex justify-between text-xl items-center">
                  <span>
                    break dancing
                    <span className="tracking-[0.2rem] text-xl">
                      {" "}
                      ----------
                    </span>
                  </span>
                  <span className="lowercase">199.00/mon</span>
                </h5>
                <h5 className=" flex justify-between text-xl items-center">
                  <span>
                    salsa
                    <span className="tracking-[0.2rem] text-xl">
                      {" "}
                      -------------------
                    </span>
                  </span>
                  <span className="lowercase">399.00/mon</span>
                </h5>
              </div>
              <div className="flex gap-8 mt-8">
                <button data-aos="zoom-out-right" className="my-btn1">
                  Out service
                </button>
                <button data-aos="zoom-out-up" className="my-btn2">
                  Get a quote
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header-wrapper ">
            <div
              className="bg-center zoominheader h-[calc(100vh+5rem)] bg-cover"
              style={{ backgroundImage: `url(${slider1})` }}
            ></div>
            <div className=" absolute top-1/3 w-full mx-auto text-white text-center">
              <p className="md:text-4xl text-2xl font-semibold mb-5">
                Create The Best Movies for You
              </p>
              <h1
                data-aos="flip-up"
                data-aos-duration="2000"
                className="md:text-9xl text-5xl font-bold uppercase"
              >
                Dance To The Beat
              </h1>
              <div className="flex gap-8 justify-center items-center mt-8">
                <button data-aos="zoom-out-up" className="my-btn1">
                  Out service
                </button>
                <button data-aos="zoom-out-up" className="my-btn2">
                  Get a quote
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
