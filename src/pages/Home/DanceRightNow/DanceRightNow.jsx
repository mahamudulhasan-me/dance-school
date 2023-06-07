import React from "react";
import danceGirl from "../../../assets/images/dance-girl.webp";
import danceIcon1 from "../../../assets/images/icons/icon5.webp";
import danceIcon2 from "../../../assets/images/icons/icon6.webp";
import danceIcon3 from "../../../assets/images/icons/icon7.webp";
import danceIcon4 from "../../../assets/images/icons/icon8.webp";
import SectionHead from "../../Shared/SectionHead/SectionHead";
const DanceRightNow = () => {
  return (
    <div className="pl-[10%] pr-[5%] grid grid-cols-12 gap-8">
      <img src={danceGirl} alt="" className="col-span-5" />
      <div className="col-span-7 mt-24">
        <SectionHead title="We make you want to dance...right now!" />
        <h1 className="font-semibold text-4xl -mt-10">
          LEARN NUANCES FROM MASTERS
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          Canvas metri essar. Incubator ramen viral product management drect
          mailing. such founders gamification Effct. Branding funding incubator.
          Release user experience beta. Backing monetization paradigm shift
          client
        </p>
        <div className="grid grid-cols-2 mt-10 gap-5">
          <div className="space-y-3 group">
            <img
              src={danceIcon1}
              alt=""
              className="group-hover:ml-5 duration-300"
            />
            <span className="font-semibold text-2xl relative">
              Dance Master{" "}
              <div className="absolute w-0 h-0.5 bg-violet-700 group-hover:w-full duration-300"></div>
            </span>
            <p className="text-gray-600 text-lg">
              Canvas metri essar. Incubator ramen viral product management drect
              mailing. such founders
            </p>
          </div>
          <div className="space-y-3 group">
            <img
              src={danceIcon2}
              alt=""
              className="group-hover:ml-5 duration-300"
            />
            <span className="font-semibold text-2xl relative">
              kill Based Coaching
              <div className="absolute w-0 h-0.5 bg-violet-700 group-hover:w-full duration-300"></div>
            </span>
            <p className="text-gray-600 text-lg">
              Canvas metri essar. Incubator ramen viral product management drect
              mailing. such founders
            </p>
          </div>
          <div className="space-y-3 group">
            <img
              src={danceIcon3}
              alt=""
              className="group-hover:ml-5 duration-300"
            />
            <span className="font-semibold text-2xl relative">
              Music Lessons
              <div className="absolute w-0 h-0.5 bg-violet-700 group-hover:w-full duration-300"></div>
            </span>
            <p className="text-gray-600 text-lg">
              Canvas metri essar. Incubator ramen viral product management drect
              mailing. such founders
            </p>
          </div>
          <div className="space-y-3 group">
            <img
              src={danceIcon4}
              alt=""
              className="group-hover:ml-5 duration-300"
            />
            <span className="font-semibold text-2xl relative">
              Learn Karaoke
              <div className="absolute w-0 h-0.5 bg-violet-700 group-hover:w-full duration-300"></div>
            </span>
            <p className="text-gray-600 text-lg">
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
