import React from "react";
import OfferingsCard from "../../Generic/OfferingsCard/OfferingsCard";
import "./Offerings.css";
import { Data } from "../../Constants/Data/Data";

function Offerings({ servicesData }) {
  return (
    <div className="OfferingContainer flex flex-column ">
      <div className="OfferingHeading text-center subheading-text">
        Our <span className=" focused-color">Offerings</span>
      </div>
      <div className="CardsContainer flex flex-wrap">
        {servicesData.map((data) => (
          <OfferingsCard data={data} />
        ))}
        {/* <OfferingsCard/>
            <OfferingsCard/>
            <OfferingsCard/>
            <OfferingsCard/>
            <OfferingsCard/>
            <OfferingsCard/>
            <OfferingsCard/> */}
      </div>
    </div>
  );
}

export default Offerings;
