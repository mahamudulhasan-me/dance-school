import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";
import { FcFeedback } from "react-icons/fc";
import Swal from "sweetalert2";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useInstructor from "../../hooks/useInstructor";
import SectionHead from "../../pages/Shared/SectionHead/SectionHead";

const ManageClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["classes", "admin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes`);
      return res.data;
    },
  });
  // approve class
  const handleApprove = (id) => {
    Swal.fire({
      title: "Do you want to approve this class?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Approve",
      denyButtonText: `Don't approve`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/admin/${id}`, {
          method: "PATCH",
          headers: { status: "approve" },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire("Approved!", "", "success");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  // handle denied
  const handleDeny = (id) => {
    Swal.fire({
      title: "Do you want to denied this class?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Denied",
      denyButtonText: `Don't deny`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/admin/${id}`, {
          method: "PATCH",
          headers: { status: "deny" },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire("Denied!", "", "success");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  // handle feedback
  const handleFeedback = async (id) => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Feedback",
      inputPlaceholder: "Type your feedback here...",
      inputAttributes: {
        "aria-label": "Type your feedback here",
      },
      showCancelButton: true,
    });

    if (text) {
      fetch(`http://localhost:5000/classes/feedback/admin/${id}`, {
        method: "PATCH",

        headers: { feedback: text },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            refetch();
            Swal.fire(
              "Feedback Submitted!",
              "You clicked the button!",
              "success"
            );
          }
        });

      console.log(text);
    }
  };
  return (
    <div>
      <SectionHead title="All Classes" />
      <div>
        <div className="overflow-x-auto bg-white p-5">
          <h2 className="text-xl py-2 font-semibold">
            Total Users: <span>5</span>
          </h2>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <table className="table table-zebra">
              {/* head */}
              <thead className="text-lg bg-slate-200 text-slate-950">
                <tr className="text-center">
                  <th></th>
                  <th>Image</th>
                  <th>Class Name</th>
                  <th>Instructor</th>
                  <th>Inst. Email</th>
                  <th>Available Seat</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-base text-center">
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  classes.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>
                        <img src={item.image} alt="" />
                      </td>
                      <td> {item.name}</td>
                      <td>{item.instructorName}</td>
                      <td>{item.instructorEmail}</td>
                      <td>{item.availableSeat}</td>
                      <td>${item.price}</td>
                      <td className="font-semibold">
                        {item?.status === "approved" ? (
                          <span className="text-success">Approved</span>
                        ) : item?.status === "denied" ? (
                          <span className="text-error">Denied</span>
                        ) : (
                          <span className="text-warning">Pending</span>
                        )}
                      </td>
                      <td>
                        <div className="flex justify-center items-center text-2xl font-semibold gap-3">
                          <button
                            onClick={() => handleApprove(item._id)}
                            disabled={item.status === "approved"}
                          >
                            <BsCheck2Square
                              className="text-green-600 "
                              title="Approve"
                            />
                          </button>
                          <button
                            onClick={() => handleDeny(item._id)}
                            disabled={item.status === "denied"}
                          >
                            <AiOutlineCloseSquare
                              className="text-rose-600"
                              title="Deny"
                            />
                          </button>
                          <FcFeedback
                            onClick={() => handleFeedback(item._id)}
                            className="cursor-pointer"
                            title="Feedback"
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
