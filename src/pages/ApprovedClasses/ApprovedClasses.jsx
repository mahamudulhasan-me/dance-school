import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PageTopBanner from "../Shared/PageTopBanner/PageTopBanner";
import SectionHead from "../Shared/SectionHead/SectionHead";
import Class from "./Class";

const ApprovedClasses = () => {
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["approved-class"],
    queryFn: async () => {
      const res = await axios.get(
        `https://dance-school-server-roan.vercel.app/approvedClasses`
      );
      return res.data;
    },
  });
  console.log(classes);
  return (
    <>
      <Helmet>
        <title>Classes | Dance School</title>
      </Helmet>
      <div className="bg-violet-50 dark:bg-slate-800">
        <PageTopBanner title="Classes" />
        <div className="md:px-[10%] px-5  py-14">
          <SectionHead
            title={<span className="font-semibold">All Active Classes</span>}
          />
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="md:grid grid-cols-3 gap-8 ">
              {classes.map((item) => (
                <Class classDetails={item} key={item._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ApprovedClasses;
