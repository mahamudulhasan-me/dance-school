import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { HiMoon } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/dance-logo.png";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import useAuth from "../../../hooks/useAuth";
import useSelectedClass from "../../../hooks/useSelectedClass";
const Header = () => {
  const { user, logout } = useAuth();
  const [selectedClasses] = useSelectedClass();

  const handleLogOut = () => {
    logout()
      .then(() => toast.error("User Logout"))
      .catch((err) => toast.error(err.message));
  };
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  const naveItems = (
    <>
      <ActiveLink to={"/"}>
        <li>Home</li>
      </ActiveLink>

      <ActiveLink to={"/instructors"}>
        <li>Instructor</li>
      </ActiveLink>
      <ActiveLink to={"/classes"}>
        <li>Classes</li>
      </ActiveLink>

      {user && (
        <>
          <ActiveLink to={"/dashboard"}>
            <li>Dashboard</li>
          </ActiveLink>
          <Link
            to={"/dashboard/student/selected-classes"}
            className=" relative mx-2"
          >
            <FaOpencart className="text-rose-600 text-4xl" />
            <p className="absolute top-2 text-white font-semibold md:right-1/2 left-3 ">
              {selectedClasses?.length}
            </p>
          </Link>{" "}
        </>
      )}
      <button onClick={handleToggle} className="">
        <label className="swap swap-rotate w-12 h-12">
          <input type="checkbox" />
          {/* light theme sun image */}
          <BsFillSunFill className="w-7 h-7 swap-on text-orange-500" />
          {/* dark theme moon image */}
          <HiMoon className="w-7 h-7 swap-off text-white" />
        </label>
      </button>
      {user ? (
        <>
          <div className="w-10 h-10 md:mb-0 mb-2 rounded-full ring ring-violet-700 mx-2">
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
          <div className="dropdown my-menu ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AiOutlineMenuUnfold size={30} color="White" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-900 bg-opacity-50 rounded-box w-52"
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
