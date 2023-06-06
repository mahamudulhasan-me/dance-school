import React from "react";
import danceGirl from "../../../assets/images/dance-girl.webp";
import SectionHead from "../../Shared/SectionHead/SectionHead";
const DanceRightNow = () => {
  return (
    <div className="pl-[10%] pr-[5%] grid grid-cols-12 ">
      <img src={danceGirl} alt="" className="col-span-5" />
      <div className="col-span-7 mt-24">
        <SectionHead title="We make you want to dance...right now!" />
        <h1 className="font-semibold text-4xl -mt-10">
          LEARN NUANCES FROM MASTERS
        </h1>
        <p className="text-gray-600 text-lg">
          Canvas metri essar. Incubator ramen viral product management drect
          mailing. such founders gamification Effct. Branding funding incubator.
          Release user experience beta. Backing monetization paradigm shift
          client
        </p>
        <div className="grid grid-cols-2">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DanceRightNow;
