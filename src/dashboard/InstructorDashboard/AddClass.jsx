import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionHead from "../../pages/Shared/SectionHead/SectionHead";

const AddClass = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    data.status = "pending";
    console.log(data);
    const {
      name,
      image,
      availableSeat,
      instructorName,
      instructorEmail,
      price,
      status,
    } = data;

    // TODO: imagebb url can be hold on .env
    const imgbbURL = `https://api.imgbb.com/1/upload?key=2d2ae9c5dd9e1059fbd193b5ec64e3fe`;
    let formData = new FormData();
    formData.append("image", image[0]);

    fetch(imgbbURL, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const updatedClass = {
            name,
            image: result.data.display_url,
            availableSeat: parseInt(availableSeat),
            instructorName,
            instructorEmail,
            price: parseFloat(price),
            enrolledStudent: parseInt(0),
            status,
          };
          axiosSecure.post("/addClass", updatedClass).then((res) => {
            if (res.data.insertedId) {
              Swal.fire(
                "Class Added Successfully!",
                "You clicked the button!",
                "success"
              );
            }
          });
        }
      });
  };
  return (
    <div>
      <SectionHead title="Add a New Class" />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 bg-white p-5">
        <div className="md:grid grid-cols-2 gap-3 mb-5 items-center">
          <div>
            <label className="text-sm">Class Name</label> <br />
            <input required {...register("name")} className="add_class-input" />
          </div>

          <div>
            <label className="text-sm">Image</label> <br />
            <input
              type="file"
              required
              {...register("image")}
              className=" file-input  file-input-md file-input-bordered w-full bg-[#E9EDF4]"
            />
          </div>

          <div>
            <label className="text-sm">Instructor</label> <br />
            <input
              required
              readOnly
              value={user?.displayName}
              defaultValue={user?.displayName}
              {...register("instructorName")}
              className="add_class-input"
            />
          </div>
          <div>
            <label className="text-sm">Instructor Email</label> <br />
            <input
              required
              readOnly
              value={user?.email}
              defaultValue={user?.email}
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
                {...register("availableSeat")}
                className="add_class-input"
              />
            </div>
            <div>
              <label className="text-sm">Price</label> <br />
              <input
                required
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

export default AddClass;
