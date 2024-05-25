import React from "react";
import "./TestimonialCard.css";
import Icon from "../../Assets/rating (1) 2.svg";

function TestimonialCard({ data }) {
  // let bgcolor='#FEBEBC'
  return (
    <div
      style={{ backgroundColor: `${data.color}` }}
      className="testimonialCard"
    >
      <div className="flex flex-space-between">
        <div className="font text45">{data.experience}</div>
        <div className="icon">
          <img src={data.icon} />
        </div>
      </div>
      <div className="font text20">
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
