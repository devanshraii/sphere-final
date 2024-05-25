import React from "react";
import "./BenefitsCard.css";
function BenefitsCard({data}) {
  return (
    <div
      className="BenefitsCardContainer "
      style={{ backgroundColor: `${data.Color}` }}
    >
      <div className="Content flex flex-center flex-column">
        <div className="BenefitsCardTitle title-text">{data.Benefit}</div>
        <div className="BenefitsCardContent text">
         {data.Description}
        </div>
      </div>
    </div>
  );
}

export default BenefitsCard;
