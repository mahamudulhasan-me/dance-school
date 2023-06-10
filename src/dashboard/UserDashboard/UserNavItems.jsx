import React from "react";
import { BiSelectMultiple } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import DashboardNavItem from "../../components/DashboardNavItem/DashboardNavItem";
import useSelectedClass from "../../hooks/useSelectedClass";
const UserNavItems = () => {
  const [selectedClasses] = useSelectedClass();
  return (
    <>
      <DashboardNavItem
        to={"/dashboard/student/selected-classes"}
        name={
          <p className="relative">
            Selected Classes{" "}
            <p className=" -top-3 -right-6 absolute flex justify-center items-center bg-violet-700  w-6 h-6 text-white  rounded-t-lg rounded-r-lg">
              {selectedClasses.length}
            </p>
          </p>
        }
        icon={BiSelectMultiple}
      />
      <DashboardNavItem
        to={"/dashboard/student/enrolled-classes"}
        name="Enrolled Classes"
        icon={FaAddressBook}
      />
      <DashboardNavItem
        to={"/dashboard/student/payment-history"}
        name="Payment History"
        icon={MdPayments}
      />
    </>
  );
};

export default UserNavItems;
