import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import PageTopBanner from "../Shared/PageTopBanner/PageTopBanner";

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
    <div>
      <PageTopBanner title="Classes" />
      Approve Classes
    </div>
  );
};

export default ApprovedClasses;
