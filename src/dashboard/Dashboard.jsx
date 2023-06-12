import React from "react";
import { Helmet } from "react-helmet";
import { AiFillSetting, AiTwotoneHome } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { Outlet, useLocation } from "react-router";
import DashboardNavItem from "../components/DashboardNavItem/DashboardNavItem";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import Breadcrumb from "../pages/Shared/Breadcrumb/Breadcrumb";
import AdminNavItems from "./AdminDashboard/AdminNavItems";
import InstructorNavItems from "./InstructorDashboard/InstructorNavItems";
import UserNavItems from "./UserDashboard/UserNavItems";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const location = useLocation();
  const currentPath = location.pathname.split("/")[3];

  return (
    <>
      <Helmet>
        <title>Dashboard | Dance School</title>
      </Helmet>
      <div className="px-[10%] min-h-screen  grid grid-cols-12 dark:bg-slate-800">
        <div className="col-span-3 h-full w-full p-3 space-y-2 bg-gray-900 text-gray-100">
          <div className="flex items-center p-2 space-x-4">
            <img
              src={user?.photoURL}
              alt=""
              className="w-12 h-12 rounded-full dark:bg-gray-500 ring ring-violet-600"
            />
            <div>
              <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <span className="flex items-center space-x-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  View profile
                </a>
              </span>
            </div>
          </div>
          <div className="divide-y divide-gray-700 dashboard">
            <ul className="pt-2 pb-4 space-y-1">
              <DashboardNavItem
                to={"/dashboard"}
                name="Dashboard"
                icon={MdDashboard}
              />
              {isAdmin ? (
                <AdminNavItems />
              ) : isInstructor ? (
                <InstructorNavItems />
              ) : (
                <UserNavItems />
              )}
            </ul>
            <ul className="pt-4 pb-2 space-y-1 ">
              <DashboardNavItem to={"/"} name="Home" icon={AiTwotoneHome} />
              <DashboardNavItem name="Settings" icon={AiFillSetting} />
              <DashboardNavItem name="Logout" icon={LuLogOut} />
            </ul>
          </div>
        </div>
        <div className=" col-span-9 bg-[#E9EDF4] dark:bg-slate-700">
          <div className="w-full">
            <Breadcrumb
              userLabel={
                isAdmin ? "Admin" : isInstructor ? "Instructor" : "Student"
              }
              currentPage={currentPath}
            />
          </div>
          <div className="m-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
