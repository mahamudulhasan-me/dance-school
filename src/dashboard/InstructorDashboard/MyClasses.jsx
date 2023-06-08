import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit } from "react-icons/fa";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionHead from "../../pages/Shared/SectionHead/SectionHead";

const MyClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: myClasses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionHead title="Your All Classes" />
      <div>
        <div className="overflow-x-auto bg-white p-5">
          <h2 className="text-xl py-2 font-semibold">
            Total Users: <span>{myClasses.length}</span>
          </h2>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <table className="table table-zebra">
              {/* head */}
              <thead className="text-lg bg-slate-200 text-slate-950">
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Class Name</th>
                  <th>Status</th>
                  <th>Enrolled</th>
                  <th>Feedback</th>
                  <th>Update</th>
                </tr>
              </thead>

              <tbody className="text-base text-center">
                {myClasses.map((myClass, index) => (
                  <tr key={myClass._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={myClass.image} alt="" className="w-20 h-16" />
                    </td>
                    <td> {myClass.name}</td>
                    <td className="font-semibold">
                      {myClass?.status === "approved" ? (
                        <span className="text-success">Approved</span>
                      ) : myClass?.status === "denied" ? (
                        <span className="text-error">Denied</span>
                      ) : (
                        <span className="text-warning">Pending</span>
                      )}
                    </td>
                    <td>
                      {myClass?.enrolledStudent ? myClass.enrolledStudent : 0}
                    </td>
                    <td>{myClass?.feedback ? myClass?.feedback : "N/A"}</td>
                    <td>
                      <FaEdit size={24} className="text-violet-700" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
