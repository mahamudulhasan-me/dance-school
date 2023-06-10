import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionHead from "../../pages/Shared/SectionHead/SectionHead";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: paymentHistory = [], isLoading } = useQuery({
    queryKey: ["payment-history", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user?.email}`);
      return res.data;
    },
  });
  const amount = paymentHistory.reduce((pre, cur) => pre + cur.amount, 0);
  const totalAmount = parseFloat(amount.toFixed(2));
  return (
    <div>
      <SectionHead
        title={<span className="font-semibold">Payment History</span>}
      />
      <div className="overflow-x-auto bg-white p-5">
        <div className="flex pl-2 my-2  items-center justify-between bg-slate-300 font-semibold text-slate-950 ">
          <p>Total Payment: {paymentHistory.length}</p>

          <p>Total Payment Amount: ${totalAmount}</p>
          <Link
            to={"/classes"}
            className="bg-primary w-32 font-normal text-white text-center py-2"
          >
            Add More Classes
          </Link>
        </div>
        {isLoading ? (
          <LoadingSpinner />
        ) : paymentHistory.length === 0 ? (
          <p className="text-center text-warning font-semibold mt-5">
            No Payment Have Yet!
          </p>
        ) : (
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-lg bg-slate-200 text-slate-950">
              <tr className="text-center">
                <th></th>
                <th>Transaction Id</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody className="text-base text-center">
              {paymentHistory.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td>
                    <span className="bg-success">{payment.transactionId}</span>{" "}
                  </td>
                  <td>
                    {moment(payment.date).format(
                      "dddd, MMMM Do YYYY, h:mm:ss a"
                    )}
                  </td>
                  <td>${payment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
