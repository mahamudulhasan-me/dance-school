import React from "react";
import { FaUserCog } from "react-icons/fa";
import { SiGoogletagmanager } from "react-icons/si";
import DashboardNavItem from "../../components/DashboardNavItem/DashboardNavItem";
const AdminNavItems = () => {
  return (
    <>
      <DashboardNavItem name={"Manage Classes"} icon={SiGoogletagmanager} />
      <DashboardNavItem name={"Manage User"} icon={FaUserCog} />
    </>
  );
};

export default AdminNavItems;
