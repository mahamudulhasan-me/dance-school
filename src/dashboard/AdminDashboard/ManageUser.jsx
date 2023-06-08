import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionHead from "../../pages/Shared/SectionHead/SectionHead";
import User from "./User";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: Users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(Users);
  return (
    <div>
      <SectionHead title="Manage All User" />
      <div>
        <div className="overflow-x-auto bg-white p-5">
          <h2 className="text-xl py-2 font-semibold">
            Total Users: <span>5</span>
          </h2>
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-lg bg-slate-200 text-slate-950">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                Users?.map((user, index) => (
                  <User
                    key={user._id}
                    index={index}
                    user={user}
                    refetch={refetch}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
