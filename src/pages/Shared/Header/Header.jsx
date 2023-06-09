import React from "react";
import { toast } from "react-hot-toast";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/dance-logo.png";
import useAuth from "../../../hooks/useAuth";
import useSelectedClass from "../../../hooks/useSelectedClass";
const Header = () => {
  const { user, logout } = useAuth();
  const [selectedClasses] = useSelectedClass();
  const handleLogOut = () => {
    logout()
      .then(() => toast.error("User Logout"))
      .then((err) => toast.error(err.message));
  };
  const naveItems = (
    <>
      <Link to={"/"}>
        <li>Home</li>
      </Link>
      <Link to={"/instructors"}>
        <li>Instructor</li>
      </Link>
      <Link to={"/classes"}>
        <li>Classes</li>
      </Link>

      {user && (
        <Link to={"/dashboard"}>
          <li>Dashboard</li>
        </Link>
      )}
      <Link
        to={"/dashboard/student/selected-classes"}
        className=" relative mx-2"
      >
        <FaOpencart className="text-rose-600 text-4xl" />
        <p className="absolute top-2 text-violet-600 font-semibold right-1/2 ">
          {selectedClasses.length}
        </p>
      </Link>
      {user ? (
        <>
          <div className="w-10 h-10 rounded-full ring ring-violet-700 mx-2">
            <img
              src={user?.photoURL}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <button
            onClick={handleLogOut}
            className="bg-violet-700 py-2 text-lg text-white px-6"
          >
            Logout
          </button>
        </>
      ) : (
        <Link to={"/login"}>
          <button className="bg-violet-700 py-2 text-lg text-white px-6">
            SignIn
          </button>
        </Link>
      )}
    </>
  );
  return (
    <div className="px-[10%] absolute top-0 left-0 right-0 mt-2 z-50">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {naveItems}
            </ul>
          </div>
          <Link>
            <img src={logo} alt="dance school logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="my-menu menu-horizontal px-1 flex justify-center items-center">
            {naveItems}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
