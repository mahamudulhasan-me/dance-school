import React from "react";
import { FaUserCog } from "react-icons/fa";
import { SiGoogletagmanager } from "react-icons/si";
import DashboardNavItem from "../../components/DashboardNavItem/DashboardNavItem";
const AdminNavItems = () => {
  return (
    <>
      <DashboardNavItem
        to={"/dashboard/admin/manage-classes"}
        name={"Manage Classes"}
        icon={SiGoogletagmanager}
      />
      <DashboardNavItem
        to={"/dashboard/admin/manage-users"}
        name={"Manage User"}
        icon={FaUserCog}
      />
    </>
  );
};

export default AdminNavItems;
