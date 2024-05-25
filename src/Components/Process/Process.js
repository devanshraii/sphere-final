import React from "react";
import "./Process.css";
import Center from "../../Assets/plan.svg"
function Process() {
  return (
    <div className="ProcessCardContainer">
      <div className="processHeadingContainer subheading-text text-center">
        <div className="subheading-text text-center">
          Our <span className="focused-color">Process</span>
        </div>
        <div className="processText">
          <p className="descriptionText text">
            Our steadfast dedication ensures high-quality work that consistently meets deadline, stays within budget, and adheres
            <br></br> to the defined scope, delivering as promised
          </p>
        </div>
      </div>
      <div className="imgContainerDiv">
        <div className="conatainerInner">
          <div className="imgOuter">
            <img className="img" src={Center} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
