import React from "react";
import { Helmet } from "react-helmet";

import Banner from "./Banner/Banner";
import DanceCount from "./DanceCount/DanceCount";
import DanceRightNow from "./DanceRightNow/DanceRightNow";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Pricing from "./Pricing/Pricing";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div className="overflow-hidden relative">
      <Helmet>
        <title>Home | Dance School</title>
      </Helmet>

      <Banner />
      <DanceRightNow />
      <PopularClasses />
      <DanceCount />
      <WhyChoose />

      <Pricing />

      <PopularInstructors />
    </div>
  );
};

export default Home;
