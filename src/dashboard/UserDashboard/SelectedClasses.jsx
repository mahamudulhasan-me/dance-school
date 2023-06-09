import React from "react";
import { toast } from "react-hot-toast";
import { MdRemoveCircle } from "react-icons/md";
import rightArrow from "../../assets/images/right-arrow.gif";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSelectedClass from "../../hooks/useSelectedClass";
import SectionHead from "../../pages/Shared/SectionHead/SectionHead";
const SelectedClasses = () => {
  const [selectedClasses, refetch, isLoading] = useSelectedClass();
  const [axiosSecure] = useAxiosSecure();
  const price = selectedClasses.map((item) => item.price);
  const totalPrice = price.reduce((pre, curr) => pre + curr, 0);

  const handleRemove = (id, name) => {
    axiosSecure.delete(`/selectedClass/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        toast.error(`${name} class remove from selected`);
      }
    });
  };
  return (
    <div>
      <SectionHead
        title={<span className="font-semibold">Your All Selected Classes</span>}
      />
      <div className="overflow-x-auto bg-white p-5">
        <div className="flex pl-2 my-2  items-center justify-between bg-slate-300 font-semibold text-slate-950 text-xl">
          <p>Total Classes: {selectedClasses.length}</p>

          <p>Price: ${totalPrice}</p>
          <img src={rightArrow} alt="" className="w-10" />

          <div className="bg-primary w-32 font-normal text-white text-center py-2">
            Payment
          </div>
        </div>
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
                <th>Available Seat</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="text-base text-center">
              {selectedClasses.map((myClass, index) => (
                <tr key={myClass._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={myClass.classImage}
                      alt=""
                      className="w-20 h-16"
                    />
                  </td>
                  <td> {myClass.className}</td>
                  <td>{myClass.availableSeat}</td>
                  <td>{myClass.price}</td>
                  <td>
                    <div
                      onClick={() =>
                        handleRemove(myClass._id, myClass.className)
                      }
                      className="text-rose-700 flex gap-1 items-center cursor-pointer"
                    >
                      <MdRemoveCircle size={20} /> Remove
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SelectedClasses;
