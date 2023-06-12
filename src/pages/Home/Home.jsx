import React from "react";
import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import DanceCount from "./DanceCount/DanceCount";
import DanceRightNow from "./DanceRightNow/DanceRightNow";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Dance School</title>
      </Helmet>
      <Banner />
      <DanceRightNow />
      <PopularClasses />
      <DanceCount />
      <PopularInstructors />
    </div>
  );
};

export default Home;
