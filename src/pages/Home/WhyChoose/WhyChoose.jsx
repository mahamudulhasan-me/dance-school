import React from "react";
import icon7 from "../../../assets/images/icons/icon7-1.webp";
import icon8 from "../../../assets/images/icons/icon8-1.webp";
import icon9 from "../../../assets/images/icons/icon9.webp";
import banner from "../../../assets/images/training6-1.jpg";
const WhyChoose = () => {
  return (
    <div className="grid grid-cols-2 items-center">
      <figure data-aos="fade-right">
        <img src={banner} alt="" />
      </figure>
      <div
        data-aos="fade-left"
        className=" bg-gradient-to-r from-violet-600 to-pink-600 text-white pl-14 py-10"
      >
        <div className="w-4/5">
          <h1 className="text-5xl">Why Choose Dance Class?</h1>
          <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          </p>
          <>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="mt-8 flex items-center justify-between gap-10 w-3/4
              group -ml-24"
            >
              <img
                src={icon8}
                alt=""
                className=" rounded-full ring ring-white p-2 bg-blue-600 group-hover:bg-green-600 transition-all duration-300"
              />
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  DANCE COMPETITIONS
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Nullam id arcu tortor.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="mt-8 flex items-center justify-between gap-10  w-3/4 group -ml-24"
            >
              <img
                src={icon7}
                alt=""
                className=" rounded-full ring ring-white p-2 bg-[#CA433F] group-hover:bg-orange-600 transition-all duration-300"
              />

              <div>
                <h2 className="text-xl font-semibold mb-2">EXPERT COACHING</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Nullam id arcu tortor.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
              className="mt-8 flex items-center justify-between gap-10  w-3/4 group -ml-24"
            >
              <img
                src={icon9}
                alt=""
                className=" rounded-full ring ring-white p-2 bg-cyan-500 group-hover:bg-rose-500 transition-all duration-300"
              />

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  INTERNATIONAL EXPOSURE
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Nullam id arcu tortor.
                </p>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
