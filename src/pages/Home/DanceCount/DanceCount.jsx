import React from "react";
import CountUp from "react-countup";
import icon1 from "../../../assets/images/icons/icon1.webp";
import icon2 from "../../../assets/images/icons/icon2.webp";
import icon3 from "../../../assets/images/icons/icon3.webp";
import icon4 from "../../../assets/images/icons/icon4.webp";

const DanceCount = () => {
  return (
    <div className="grid grid-cols-4 px-[5%]  py-10 overflow-hidden dark:bg-slate-900">
      <div data-aos="fade-right" className="flex justify-center items-center">
        <div className="group flex flex-col justify-center items-center text-center py-5 px-8 dark:bg-slate-800">
          <img src={icon1} alt="" className="mx-auto" />
          <div>
            <h1 className="font-semibold text-4xl my-4 dark:text-slate-200 ">
              <CountUp enableScrollSpy={true} delay={5000} end={50} />
            </h1>
            <div className=" w-16 h-1 group-hover:w-24 duration-300 bg-gradient-to-r from-violet-600 to-rose-600"></div>
          </div>
          <p className="text-lg text-gray-600 mt-4 dark:text-gray-200">
            Salsa is very popular genre of dance from the Caribbean with salsa
            music.
          </p>
        </div>
        <div className="h-32 w-1 bg-gray-400"></div>
      </div>
      <div data-aos="zoom-in" className="flex justify-center items-center">
        <div className="group flex flex-col justify-center items-center text-center py-5 px-8 dark:bg-slate-800">
          <img src={icon2} alt="" className="mx-auto" />
          <div>
            <h1 className="font-semibold text-4xl my-4 dark:text-slate-200 ">
              <CountUp enableScrollSpy={true} delay={2000} end={1920} />
            </h1>
            <div className=" w-16 h-1 group-hover:w-24 duration-300 bg-gradient-to-r from-violet-600 to-rose-600"></div>
          </div>
          <p className="text-lg text-gray-600 mt-4 dark:text-gray-200">
            Hip hop is a style of popular music featuring rap with an electronic
            backing.
          </p>
        </div>
        <div className="h-32 w-1 bg-gray-400"></div>
      </div>
      <div data-aos="zoom-in" className="flex justify-center items-center">
        <div className="group flex flex-col justify-center items-center text-center py-5 px-8 dark:bg-slate-800">
          <img src={icon3} alt="" className="mx-auto" />
          <div>
            <h1 className="font-semibold text-4xl my-4 dark:text-slate-200 ">
              <CountUp enableScrollSpy={true} delay={2000} end={2331} />
            </h1>
            <div className=" w-16 h-1 group-hover:w-24 duration-300 bg-gradient-to-r from-violet-600 to-rose-600"></div>
          </div>
          <p className="text-lg text-gray-600 mt-4 dark:text-gray-200">
            Tap dance is a genre of dance using the sounds of tap shoes striking
            the floor.
          </p>
        </div>
        <div className="h-32 w-1 bg-gray-400"></div>
      </div>

      <div
        data-aos="fade-left"
        className="group flex flex-col justify-center items-center text-center py-5 px-8 dark:bg-slate-800"
      >
        <img src={icon4} alt="" className="mx-auto" />
        <div>
          <h1 className="font-semibold text-4xl my-4 dark:text-slate-200 ">
            <CountUp enableScrollSpy={true} delay={2000} end={1122} />
          </h1>
          <div className="mx-auto w-16 h-1 group-hover:w-24 duration-300 bg-gradient-to-r from-violet-600 to-rose-600"></div>
        </div>
        <p className="text-lg text-gray-600 mt-4 dark:text-gray-200">
          Ballet dancing is for getting into shape, improve flexibility and have
          fun!
        </p>
      </div>
    </div>
  );
};

export default DanceCount;
