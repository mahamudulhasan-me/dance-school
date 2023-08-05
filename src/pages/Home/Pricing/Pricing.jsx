import React from "react";
import bg from "../../../assets/images/bg-img.jpg";
import PriceLi from "../../../components/PriceLi/PriceLi";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import PriceCard from "./PriceCard";
const Pricing = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen bg-cover bg-fixed bg-violet-600 bg-blend-overlay  p-10"
    >
      <SectionHead
        title={<h1 className="text-white">BECOME MEMBER OF FLAIRS</h1>}
      />

      <div className="grid grid-cols-4 divide-x divide-gray-300">
        <PriceCard
          classCount="2"
          price="199"
          features={
            <>
              <PriceLi value="1 Person" />
              <PriceLi value="1 Trainer" />
              <PriceLi value="1 Course" />
            </>
          }
        />
        <PriceCard
          classCount="3"
          price="150"
          features={
            <>
              <PriceLi value="1 Person" />
              <PriceLi value="1 Trainer" />
              <PriceLi value="1 Course" />
              <PriceLi value="Custom Timing" />
            </>
          }
        />
        <PriceCard
          classCount="4"
          price="200"
          features={
            <>
              <PriceLi value="1 Person" />
              <PriceLi value="1 Trainer" />
              <PriceLi value="1 Course" />
              <PriceLi value="Custom Timing" />
            </>
          }
        />
        <PriceCard
          classCount="4"
          price="250"
          features={
            <>
              <PriceLi value="1 Person" />
              <PriceLi value="1 Trainer" />
              <PriceLi value="1 Course" />
              <PriceLi value="Custom Timing" />
              <PriceLi value="Special Audition" />
            </>
          }
        />
      </div>
    </div>
  );
};

export default Pricing;
