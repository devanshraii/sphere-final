import React from "react";
import "./OfferingsCard.css";
import Icon from "../../Assets/currency 1.svg";

function OfferingsCard({data}) {
  return (
    <div className="OfferingCardContainer " style={{ backgroundColor:`${data.Color}` }}>
      <div className="OfferingIcon flex flex-center">
        <img src={data.Icon} />
      </div>
      <div className="OfferingTitle title-text">{data.Service}</div>
      <div className="OfferingData text">
       {data.Description}
      </div>
    </div>
  );
}

export default OfferingsCard;
