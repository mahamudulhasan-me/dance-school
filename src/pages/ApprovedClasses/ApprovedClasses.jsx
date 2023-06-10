import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import PageTopBanner from "../Shared/PageTopBanner/PageTopBanner";
import SectionHead from "../Shared/SectionHead/SectionHead";
import Class from "./Class";

const ApprovedClasses = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["approved-class"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/approvedClasses`);
      return res.data;
    },
  });
  console.log(classes);
  return (
    <div className="bg-violet-50 ">
      <PageTopBanner title="Classes" />
      <div className="w-4/5 mx-auto py-14">
        <SectionHead
          title={<span className="font-semibold">All Active Classes</span>}
        />
        <div className="grid grid-cols-3 gap-8 ">
          {classes.map((item) => (
            <Class classDetails={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApprovedClasses;
