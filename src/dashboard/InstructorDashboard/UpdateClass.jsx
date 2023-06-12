import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionHead from "../../pages/Shared/SectionHead/SectionHead";

const UpdateClass = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: singleClass = {} } = useQuery({
    queryKey: ["single-class", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/class/${id}`);
      return res.data;
    },
  });

  console.log(singleClass);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const updatedInfo = {
      name: data.name,
      availableSeat: parseInt(data.availableSeat),
      price: parseFloat(data.price),
    };
    axiosSecure.patch(`/update-class/${id}`, updatedInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire(
          "Class Updated Successfully!",
          "You clicked the button!",
          "success"
        );
        navigate("/dashboard/instructor/my-class");
      }
    });
  };

  return (
    <div>
      <SectionHead title={"Update Class"} />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 bg-white p-5">
        <div className="md:grid grid-cols-2 gap-3 mb-5 items-center">
          <div>
            <label className="text-sm">Class Name</label> <br />
            <input
              defaultValue={singleClass?.name}
              required
              {...register("name")}
              className="add_class-input"
            />
          </div>

          <div>
            <label className="text-sm">Image</label> <br />
            <input
              disabled
              type="file"
              defaultValue={singleClass.image}
              required
              {...register("image")}
              className=" file-input  file-input-md file-input-bordered w-full bg-[#E9EDF4]"
            />
          </div>

          <div>
            <label className="text-sm">Instructor</label> <br />
            <input
              required
              disabled
              defaultValue={singleClass?.instructorName}
              {...register("instructorName")}
              className="add_class-input"
            />
          </div>
          <div>
            <label className="text-sm">Instructor Email</label> <br />
            <input
              required
              disabled
              defaultValue={singleClass?.instructorEmail}
              {...register("instructorEmail")}
              className="add_class-input"
            />
          </div>
          <input
            type="submit"
            value="Add Class"
            className="w-full bg-violet-600 text-white py-2 mt-5 text-lg"
          />
          <div className=" flex gap-1 items-center">
            <div>
              <label className="text-sm">Available Seat</label> <br />
              <input
                type="number"
                required
                defaultValue={singleClass?.availableSeat}
                {...register("availableSeat")}
                className="add_class-input"
              />
            </div>
            <div>
              <label className="text-sm">Price</label> <br />
              <input
                required
                defaultValue={singleClass?.price}
                {...register("price")}
                className="add_class-input"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateClass;
