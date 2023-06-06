import React from "react";
import bg from "../../../assets/images/banner/dance-img.jpg";
import class1 from "../../../assets/images/classes/classes1.jpg";
import OpeningDayTime from "../../../components/OpeingDayTime/OpeningDateTime";
import SectionHead from "../../Shared/SectionHead/SectionHead";
const PopularClasses = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" min-h-screen bg-cover bg-white bg-blend-overlay bg-opacity-80"
    >
      <div className="grid grid-cols-12 pl-5 mt-20 gap-8">
        <div className="col-span-8">
          <SectionHead title={"Popular Classes"} />
          <div className="grid grid-cols-3 gap-6">
            <div className="group border">
              <img src={class1} alt="" />
              <div className="text-center mt-8">
                <div className="mb-5">
                  <h3 className="text-xl text-gray-800">American Rhythm</h3>
                  <div className="w-12 mx-auto h-1 bg-violet-700 mt-4 group-hover:w-24 duration-300 hover:duration-300 hover:transition-all transition-all "></div>
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
                <p className="bg-violet-700 w-1/2 py-3 font-normal">
                  View Class
                </p>
              </div>
            </div>
            <div className="group border">
              <img src={class1} alt="" />
              <div className="text-center mt-8">
                <div className="mb-5">
                  <h3 className="text-xl text-gray-800">American Rhythm</h3>
                  <div className="w-12 mx-auto h-1 bg-violet-700 mt-4 group-hover:w-24 duration-300 hover:duration-300 hover:transition-all transition-all "></div>
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
                <p className="bg-violet-700 w-1/2 py-3 font-normal">
                  View Class
                </p>
              </div>
            </div>
            <div className="group border">
              <img src={class1} alt="" />
              <div className="text-center mt-8">
                <div className="mb-5">
                  <h3 className="text-xl text-gray-800">American Rhythm</h3>
                  <div className="w-12 mx-auto h-1 bg-violet-700 mt-4 group-hover:w-24 duration-300 hover:duration-300 hover:transition-all transition-all "></div>
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
                <p className="bg-violet-700 w-1/2 py-3 font-normal">
                  View Class
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 pr-20">
          <SectionHead title={"Opening Hours"} />
          <div className="space-y-5">
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
