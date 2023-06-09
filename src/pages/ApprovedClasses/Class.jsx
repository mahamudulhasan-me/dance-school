import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Class = ({ classDetails }) => {
  const { user } = useAuth();
  const {
    _id,
    name,
    image,
    availableSeat,
    instructorName,
    price,
    enrolledStudent,
  } = classDetails;

  const handleSelectClass = () => {
    const addedClassInfo = {
      className: name,
      classImage: image,
      price,
      availableSeat,
      studentEmail: user.email,
      studentName: user.displayName,
      classId: _id,
    };
    axios
      .post("http://localhost:5000/selectClass", addedClassInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Class added successfully");
        }
      });
  };
  return (
    <div className="group border">
      <img src={image} alt="" />
      <div className="text-center mt-8">
        <div className="mb-5">
          <h3 className="text-xl text-gray-800 font-semibold">{name}</h3>
          <div className="w-12 mx-auto h-0.5 bg-violet-700 mt-4 group-hover:w-24 duration-300 hover:duration-300 hover:transition-all transition-all "></div>
        </div>
        <p>
          <span className="text-gray-500">Instructor:</span>{" "}
          <span className="text-gray-800">{instructorName}</span>{" "}
        </p>
        <p>
          <span className="text-gray-500">Available Seat:</span>{" "}
          <span className="text-gray-800">{availableSeat}</span>{" "}
        </p>
      </div>
      <div className="mt-3 flex justify-between items-center text-center text-white font-semibold text-lg">
        <p className="bg-slate-950 w-1/2 py-3 ">${price}</p>
        <p
          onClick={handleSelectClass}
          className="bg-violet-700 w-1/2 py-3 font-normal cursor-pointer"
        >
          Select Class
        </p>
      </div>
    </div>
  );
};

export default Class;
