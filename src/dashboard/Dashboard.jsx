import React from "react";
import { AiFillSetting, AiTwotoneHome } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { Outlet, useLocation } from "react-router";
import DashboardNavItem from "../components/DashboardNavItem/DashboardNavItem";
import useAuth from "../hooks/useAuth";
import Breadcrumb from "../pages/Shared/Breadcrumb/Breadcrumb";
import AdminNavItems from "./AdminDashboard/AdminNavItems";
import InstructorNavItems from "./InstructorDashboard/InstructorNavItems";
import UserNavItems from "./UserDashboard/UserNavItems";

const Dashboard = () => {
  const { user } = useAuth();
  const isAdmin = false;
  const isInstructor = true;

  const location = useLocation();
  const currentPath = location.pathname.split("/")[3];
  console.log(currentPath);
  return (
    <div className="w-4/5 mx-auto min-h-screen bg-[#E9EDF4] grid grid-cols-12">
      <div className="col-span-3 h-full w-full p-3 space-y-2 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex items-center p-2 space-x-4">
          <img
            src={user?.photoUrl}
            alt=""
            className="w-12 h-12 rounded-full dark:bg-gray-500"
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
      <div className=" col-span-9">
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
  );
};

export default Dashboard;
