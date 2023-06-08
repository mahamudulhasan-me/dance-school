import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/dance-logo.png";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useInstructor from "../../../hooks/useInstructor";
const Header = () => {
  const { user, logout } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const handleLogOut = () => {
    logout()
      .then(() => toast.error("User Logout"))
      .then((err) => toast.error(err.message));
  };
  const naveItems = (
    <>
      <Link>
        <li>Home</li>
      </Link>
      <Link>
        <li>Instructor</li>
      </Link>
      <Link>
        <li>Classes</li>
      </Link>
      {user && user ? (
        <>
          <Link
            to={
              isAdmin
                ? "/dashboard/admin/manage-classes"
                : isInstructor
                ? "/dashboard/instructor/add-class"
                : "/dashboard/selected-classes"
            }
          >
            <li>Dashboard</li>
          </Link>
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
