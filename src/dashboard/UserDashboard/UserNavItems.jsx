import React from "react";
import { BiSelectMultiple } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";
import DashboardNavItem from "../../components/DashboardNavItem/DashboardNavItem";
const UserNavItems = () => {
  return (
    <>
      <DashboardNavItem name="My Selected Classes" icon={BiSelectMultiple} />
      <DashboardNavItem name="My Enrolled Classes" icon={FaAddressBook} />
    </>
  );
};

export default UserNavItems;
