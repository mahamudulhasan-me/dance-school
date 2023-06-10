import React from "react";
import Banner from "./Banner/Banner";
import DanceRightNow from "./DanceRightNow/DanceRightNow";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Banner />
      <DanceRightNow />
      <PopularClasses />
      <PopularInstructors />
    </div>
  );
};

export default Home;
