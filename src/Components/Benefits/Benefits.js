import React from "react";
import BenefitsCard from "../../Generic/BenefitsCard/BenefitsCard";
import "./Benefits.css";
import { Data } from "../../Constants/Data/Data";

function Benefits({ heading, servicesData }) {
  return (
    <div className="BenefitsContainer flex flex-center flex-column">
      <div className="subheading-text text-white BenefitsHeading">
        Benefits of <span className="focused-color ">{heading}</span>
      </div>
      <div className="BenefitsBody">
        {servicesData.map((data) => (
          <BenefitsCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default Benefits;
// '#9BB3F8'
// '#FDC47A'
// '#E499EF'
// '#41D6BC'
// '#F98AA2'
// '#A5EFFF'

// #D9CFF4
// #9FF5E5
// #FDF8CF
// #D1F7FF
// #FFE2D1
// #CDE2FB
// #FEC6E1
