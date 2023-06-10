import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionHead from "../../pages/Shared/SectionHead/SectionHead";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClasses = [], isLoading } = useQuery({
    queryKey: ["enrolled-classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolled-classes/${user?.email}`);
      return res.data;
    },
  });
  console.log(enrolledClasses);
  return (
    <div>
      <SectionHead
        title={<span className="font-semibold">Payment History</span>}
      />
      <div className="overflow-x-auto bg-white p-5">
        <div className="flex pl-2 my-2  items-center justify-between bg-slate-300 font-semibold text-slate-950 ">
          <p>Enrolled Classes: {enrolledClasses.length}</p>

          <Link
            to={"/classes"}
            className="bg-primary w-32 font-normal text-white text-center py-2"
          >
            Enroll Now
          </Link>
        </div>
        {isLoading ? (
          <LoadingSpinner />
        ) : enrolledClasses.length === 0 ? (
          <p className="text-center text-warning font-semibold mt-5">
            You have not enrolled!
          </p>
        ) : (
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-lg bg-slate-200 text-slate-950">
              <tr className="text-center">
                <th></th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Purchase Date</th>
              </tr>
            </thead>

            <tbody className="text-base text-center">
              {enrolledClasses.map((myClass, index) => (
                <tr key={myClass._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={myClass.classDetail.image}
                      alt=""
                      className="w-20 h-16"
                    />
                  </td>
                  <td> {myClass.classDetail.name}</td>
                  <td>{myClass.classDetail.instructorName}</td>
                  <td>{myClass.classDetail.price}</td>
                  <td>
                    {moment(myClass.paymentDate.date).format(
                      "ddd, D MMMM YYYY"
                    )}
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

export default EnrolledClasses;
