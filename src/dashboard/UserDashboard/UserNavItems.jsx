import React from "react";
import { BiSelectMultiple } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";
import DashboardNavItem from "../../components/DashboardNavItem/DashboardNavItem";
const UserNavItems = () => {
  return (
    <>
      <DashboardNavItem
        to={"/dashboard/student/selected-classes"}
        name="My Selected Classes"
        icon={BiSelectMultiple}
      />
      <DashboardNavItem
        to={"/dashboard/student/enrolled-classes"}
        name="My Enrolled Classes"
        icon={FaAddressBook}
      />
    </>
  );
};

export default UserNavItems;
