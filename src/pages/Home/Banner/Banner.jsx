import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper";
import slider1 from "../../../assets/images/banner/slider1-1.jpg";
import slider2 from "../../../assets/images/banner/slider2-1.jpg";
import "./Styles.css";
const Banner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="header-wrapper ">
            <div
              className="zoominheader h-[calc(100vh+5rem)] bg-cover"
              style={{ backgroundImage: `url(${slider2})` }}
            ></div>
            <div className="absolute top-1/4 px-[10%]">
              <h3 className="text-white  text-4xl">Be in the</h3>
              <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 uppercase">
                SpotLight
              </h1>
              <p className="text-white italic text-lg font-serif -mt-4 tracking-[0.2rem]">
                Learn from the Best - Dance Profession
              </p>
              <div className="text-white uppercase mt-8 space-y-5">
                <h5 className=" flex justify-between text-xl items-center">
                  <span>
                    Hip-hop dance
                    <span className="tracking-[0.2rem] text-3xl">
                      {" "}
                      ----------
                    </span>
                  </span>
                  <span className="lowercase">199.00/mon</span>
                </h5>
                <h5 className=" flex justify-between text-xl items-center">
                  <span>
                    Ballet
                    <span className="tracking-[0.2rem] text-3xl">
                      {" "}
                      ------------------
                    </span>
                  </span>
                  <span className="lowercase">299.00/mon</span>
                </h5>
                <h5 className=" flex justify-between text-xl items-center">
                  <span>
                    break dancing
                    <span className="tracking-[0.2rem] text-3xl">
                      {" "}
                      ----------
                    </span>
                  </span>
                  <span className="lowercase">199.00/mon</span>
                </h5>
                <h5 className=" flex justify-between text-xl items-center">
                  <span>
                    salsa
                    <span className="tracking-[0.2rem] text-3xl">
                      {" "}
                      -------------------
                    </span>
                  </span>
                  <span className="lowercase">399.00/mon</span>
                </h5>
              </div>
              <div className="flex gap-8 mt-8">
                <button className="my-btn1">Out service</button>
                <button className="my-btn2">Get a quote</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header-wrapper ">
            <div
              className="zoominheader h-[calc(100vh+5rem)] bg-cover"
              style={{ backgroundImage: `url(${slider1})` }}
            ></div>
            <div className="absolute top-1/3 px-[10%]">
              <h3 className="text-white  text-4xl">Be in the</h3>
              <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 uppercase">
                SpotLight
              </h1>
              <p className="text-white italic text-lg font-serif -mt-4 tracking-[0.2rem]">
                Learn from the Best - Dance Profession
              </p>
              <div className="text-white uppercase mt-8 space-y-5">
                <h5 className=" flex justify-between text-xl items-center">
                  <span>
                    Hip-hop dance
                    <span className="tracking-[0.2rem] text-3xl">
                      {" "}
                      ----------
                    </span>
                  </span>
                  <span className="lowercase">199.00/mon</span>
                </h5>
                <h5 className=" flex justify-between text-xl items-center">
                  <span>
                    Ballet
                    <span className="tracking-[0.2rem] text-3xl">
                      {" "}
                      ------------------
                    </span>
                  </span>
                  <span className="lowercase">299.00/mon</span>
                </h5>
                <h5 className=" flex justify-between text-xl items-center">
                  <span>
                    break dancing
                    <span className="tracking-[0.2rem] text-3xl">
                      {" "}
                      ----------
                    </span>
                  </span>
                  <span className="lowercase">199.00/mon</span>
                </h5>
                <h5 className=" flex justify-between text-xl items-center">
                  <span>
                    salsa
                    <span className="tracking-[0.2rem] text-3xl">
                      {" "}
                      -------------------
                    </span>
                  </span>
                  <span className="lowercase">399.00/mon</span>
                </h5>
              </div>
              <div className="flex gap-8 mt-8">
                <button className="my-btn1">Out service</button>
                <button className="my-btn2">Get a quote</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
