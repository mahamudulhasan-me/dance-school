import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import {
  FaCartPlus,
  FaGg,
  FaRegBookmark,
  FaStar,
  FaStarHalf,
  FaUsers,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useInstructor from "../../hooks/useInstructor";
import useSelectedClass from "../../hooks/useSelectedClass";

const Class = ({ classDetails }) => {
  const { user } = useAuth();
  const [, refetch] = useSelectedClass();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    _id,
    name,
    image,
    availableSeat,
    instructorName,
    price,
    instructorImage,
    enrolledStudent,
  } = classDetails;

  const handleSelectClass = () => {
    if (user) {
      if (isAdmin || isInstructor) {
        return toast.error("It's not your job!");
      }
      if (availableSeat === 0) {
        return toast.error("Seat is not available");
      }
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
            refetch();
            toast.success("Class added successfully");
          } else {
            toast.error("This class already selected");
          }
        });
    } else {
      Swal.fire({
        title: "Are you want to login?",
        text: "For select class you have to login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { from: { state: location } }, { replace: true });
        }
      });
    }
  };

  return (
    <div
      className={`${
        availableSeat === 0
          ? "bg-rose-300 dark:bg-rose-500"
          : "bg-gray-50 dark:bg-slate-900"
      } rounded-md font-nunito font-semibold group hover:shadow-2xl mb-12`}
    >
      <div
        className={` px-8 pt-8 group-hover:scale-105 duration-300  rounded-lg`}
      >
        <img src={image} alt="" className="rounded-md" />
        <div className="mt-4">
          <div className="flex justify-between items-center ">
            <p className="flex items-center text-orange-600">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <span className="text-gray-600 dark:text-gray-400">
                (10 reviews)
              </span>
            </p>
            <FaRegBookmark size={24} className="dark:text-gray-200" />
          </div>
          <h1 className="text-2xl font-bold mt-4 text-slate-950 dark:text-slate-200">
            {name}
          </h1>
          <div className="text-gray-600 dark:text-gray-400">
            <div className="flex gap-4 items-center  text-sm font-bold">
              {/* <p className="flex  items-center  gap-1">
                      <IoMdStopwatch /> 26 Hours
                    </p> */}
              <p className="flex  items-center gap-1">
                <FaUsers />
                <span> {enrolledStudent} Students</span>
              </p>
              <p
                className={`flex  items-center gap-1 text-sm ${
                  availableSeat === 0 ? "text-rose-600" : ""
                }`}
              >
                <FaGg />
                <span> {availableSeat} seats available</span>
              </p>
            </div>

            <p className="text-lg text-justify mt-1 mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              mollitia, ut qui cupiditate a ratione.
            </p>
            <div className="flex items-center text-lg font-semibold gap-3 mt-4 ">
              <img
                src={instructorImage}
                className="w-9 h-9 rounded-full p-0.5 ring ring-gray-200"
                alt=""
              />
              <p>
                by{" "}
                <span className="text-gray-900 dark:text-slate-200 font-semibold">
                  {instructorName}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between    mt-4  text-center border-b-4 rounded-b-md border-rose-600">
        <p className=" text-xl flex justify-center items-center font-roboto bg-black w-1/2 text-white py-1">
          <span className=" font-semibold ">${price - 10}</span>
          <span className="line-through text-gray-500 font-normal ml-2 text-lg">
            ${price}
          </span>
        </p>
        <p className="bg-violet-600 hover:bg-violet-700 duration-150 w-1/2 ">
          <Link
            onClick={handleSelectClass}
            className="flex items-center justify-center gap-2 font-semibold text-white py-2"
          >
            <FaCartPlus /> Add to cart
          </Link>
        </p>
      </div>
    </div>

    // <div className="group border">
    //   <img src={image} alt="" />
    //   <div className="text-center mt-8">
    //     <div className="mb-5">
    //       <h3 className="text-xl text-gray-800 font-semibold">{name}</h3>
    //       <div className="w-12 mx-auto h-0.5 bg-violet-700 mt-4 group-hover:w-24 duration-300 hover:duration-300 hover:transition-all transition-all "></div>
    //     </div>

    //     <p>
    //       <span className="text-gray-500">Instructor:</span>{" "}
    //       <span className="text-gray-800  font-semibold">{instructorName}</span>{" "}
    //     </p>

    //     <p>
    //       <span className="text-gray-500 flex justify-center center gap-1">
    //         <FaUserTie />{" "}
    //         <span>
    //           Available Seat:
    //           <span className="text-gray-800  font-semibold">
    //             {availableSeat}
    //           </span>
    //         </span>
    //       </span>
    //     </p>
    //     <p>
    //       <span className="text-gray-500 flex justify-center items-center gap-1">
    //         <FaUsers />{" "}
    //         <span>
    //           Enrolled:{" "}
    //           <span className="text-gray-800  font-semibold">
    //             {enrolledStudent} Students
    //           </span>
    //         </span>
    //       </span>
    //     </p>
    //   </div>
    //   <div className="mt-3 flex justify-between items-center text-center text-white font-semibold text-lg">
    //     <p className="bg-slate-950 w-1/2 py-3 ">${price}</p>
    //     <p
    //       onClick={() => handleSelectClass()}
    //       className="bg-violet-700 w-1/2 py-3 font-normal cursor-pointer"
    //     >
    //       Select Class
    //     </p>
    //   </div>
    // </div>
  );
};

export default Class;
