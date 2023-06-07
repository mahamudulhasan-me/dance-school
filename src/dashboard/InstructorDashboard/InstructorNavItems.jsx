import React from "react";
import { AiFillFolderAdd } from "react-icons/ai";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import DashboardNavItem from "../../components/DashboardNavItem/DashboardNavItem";
const InstructorNavItems = () => {
  return (
    <>
      <DashboardNavItem
        to={"/dashboard/instructor/add-class"}
        name="Add Class"
        icon={AiFillFolderAdd}
      />
      <DashboardNavItem
        to={"/dashboard/instructor/my-class"}
        name="My Classes"
        icon={BsFillBookmarkCheckFill}
      />
    </>
  );
};

export default InstructorNavItems;
