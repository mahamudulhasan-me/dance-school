import React from "react";
import danceGirl from "../../../assets/images/dance-girl.webp";
import danceIcon1 from "../../../assets/images/icons/icon5.webp";
import danceIcon2 from "../../../assets/images/icons/icon6.webp";
import danceIcon3 from "../../../assets/images/icons/icon7.webp";
import danceIcon4 from "../../../assets/images/icons/icon8.webp";
import SectionHead from "../../Shared/SectionHead/SectionHead";
const DanceRightNow = () => {
  return (
    <div className="pl-[10%] pr-[5%] grid grid-cols-12 gap-8 py-10 overflow-hidden dark:bg-slate-900">
      <div data-aos="fade-right" className="col-span-5">
        <img src={danceGirl} alt="" />
      </div>

      <div className="col-span-7 mt-24">
        <SectionHead
          title={
            <span className="font-normal">
              We make you want to dance...right now!
            </span>
          }
        />
        <h1 className="font-semibold text-4xl -mt-10 dark:text-gray-200">
          LEARN NUANCES FROM MASTERS
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mt-4 font-nunito ">
          Canvas metri essar. Incubator ramen viral product management drect
          mailing. such founders gamification Effct. Branding funding incubator.
          Release user experience beta. Backing monetization paradigm shift
          client
        </p>
        <div className="grid grid-cols-2 mt-10 gap-5 ">
          <div className="space-y-3 group" data-aos="fade-down">
            <img
              src={danceIcon1}
              alt=""
              className="group-hover:ml-5 duration-300"
            />
            <span className="font-semibold text-2xl relative dark:text-gray-200">
              Dance Master{" "}
              <div className="absolute w-0 h-0.5 bg-violet-700 group-hover:w-full duration-300"></div>
            </span>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              Canvas metri essar. Incubator ramen viral product management drect
              mailing. such founders
            </p>
          </div>
          <div className="space-y-3 group" data-aos="fade-down">
            <img
              src={danceIcon2}
              alt=""
              className="group-hover:ml-5 duration-300"
            />
            <span className="font-semibold text-2xl relative dark:text-gray-200">
              kill Based Coaching
              <div className="absolute w-0 h-0.5 bg-violet-700 group-hover:w-full duration-300"></div>
            </span>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              Canvas metri essar. Incubator ramen viral product management drect
              mailing. such founders
            </p>
          </div>
          <div className="space-y-3 group" data-aos="fade-down">
            <img
              src={danceIcon3}
              alt=""
              className="group-hover:ml-5 duration-300"
            />
            <span className="font-semibold text-2xl relative dark:text-gray-200">
              Music Lessons
              <div className="absolute w-0 h-0.5 bg-violet-700 group-hover:w-full duration-300"></div>
            </span>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              Canvas metri essar. Incubator ramen viral product management drect
              mailing. such founders
            </p>
          </div>
          <div className="space-y-3 group" data-aos="fade-down">
            <img
              src={danceIcon4}
              alt=""
              className="group-hover:ml-5 duration-300"
            />
            <span className="font-semibold text-2xl relative dark:text-gray-200">
              Learn Karaoke
              <div className="absolute w-0 h-0.5 bg-violet-700 group-hover:w-full duration-300"></div>
            </span>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              Canvas metri essar. Incubator ramen viral product management drect
              mailing. such founders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanceRightNow;
