import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const User = ({ user, index, refetch }) => {
  const [edit, setEdit] = useState(false);
  const { _id, name, email } = user;
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  const handleRole = (e) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      const role = e.target.value;
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${_id}`, {
          method: "PATCH",
          headers: { role },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire(`Make ${role}`, "", "success");
              refetch();
            }
          });
        setEdit(!edit);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        setEdit(!edit);
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {user?.role === "admin" ? (
          <p className="text-green-700 font-semibold">Admin</p>
        ) : user?.role == "instructor" ? (
          "Instructor"
        ) : (
          "Student"
        )}
      </td>
      <td className="w-44 mx-auto">
        <div className="flex gap-3 text-xl justify-center items-center">
          <select
            onChange={handleRole}
            className={`select select-bordered select-sm duration-200  max-w-xs ${
              !edit ? "hidden" : ""
            }`}
          >
            <option disabled selected>
              Set Role
            </option>
            <option value="admin">Admin</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
          </select>
          <FaEdit
            onClick={() => setEdit(!edit)}
            className={`text-violet-600 cursor-pointer duration-300 ${
              edit ? "hidden" : ""
            }`}
            title="Update Role"
          />
          <FaTrashAlt
            onClick={() => handleDelete(_id)}
            className="text-rose-600 cursor-pointer"
            title="Delete User?"
          />
        </div>
      </td>
    </tr>
  );
};

export default User;
