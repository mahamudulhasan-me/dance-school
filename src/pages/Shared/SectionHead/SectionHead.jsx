import React from "react";

const SectionHead = ({ title }) => {
  return (
    <div className="text-3xl text-slate-950 mb-10 font-semibold">
      {title}
      <div className="mt-3 w-14 bg-violet-700 h-0.5"></div>
    </div>
  );
};

export default SectionHead;
