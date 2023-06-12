import React from "react";
import bg from "../../../assets/images/banner/dance-img.jpg";
import OpeningDayTime from "../../../components/OpeingDayTime/OpeningDateTime";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import ClassSlider from "./ClassSlider";
const PopularClasses = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="overflow-hidden min-h-screen pt-3 pb-10 bg-cover bg-white dark:bg-slate-900 bg-blend-overlay bg-opacity-70"
    >
      <div className="md:grid md:grid-cols-12 md:pl-5 px-5 md:px-0 mt-20 gap-6">
        <div className="md:col-span-8">
          <SectionHead title={"Popular Classes"} />
          <div data-aos="fade-right">
            <ClassSlider />
          </div>
        </div>
        <div className="col-span-4 md:pr-20 ">
          <SectionHead title={"Opening Hours"} />
          <div className="space-y-5" data-aos="fade-left">
            <OpeningDayTime day="Saturday" time="8am-10pm" />
            <OpeningDayTime day="Sunday" time="8am-10pm" />
            <OpeningDayTime day="Monday" time="8am-10pm" />
            <OpeningDayTime day="Tuesday" time="8am-10pm" />
            <OpeningDayTime day="Wednesday" time="8am-10pm" />
            <OpeningDayTime day="Thursday" time="8am-10pm" />
            <OpeningDayTime
              day="Friday"
              time={<span className="text-rose-600">Closed</span>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
