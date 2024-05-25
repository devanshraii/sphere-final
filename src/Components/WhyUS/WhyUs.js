import React, { useState, useEffect } from "react";
import "./WhyUs.css";
import ChooseUsImage from "../../Assets/Why choose us.svg";
import img from "../../Assets/Group 39508.png";

function WhyUs() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Update isMobileView state based on viewport width
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view on component mount
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="whyUsContainer">
      <div style={{ width: "100%" }}>
        <div className="subheading-text text-white text-center">
          <p>
            Why<span className="focused-color"> Choose </span> Us
          </p>
        </div>
        <div className="description-container whyUsDescription text">
          <p>
            Our unwavering mission persists: absolute client success. We've
            carved our path through innovation, consistently delivering
            excellence in the realms of technology advancement and business
            evolution. With a relentless commitment to our clients, we continue
            to redefine success by seamlessly blending technological prowess,
            ensuring every milestone achieved is a testament to our
            client-centric ethos.
          </p>
        </div>
      </div>
      <div className="choseUsImage">
        {isMobileView ? (
          <img className="new-image" src={img} alt="New" />
        ) : (
          <img className="choose-image" src={ChooseUsImage} alt="Reasons" />
        )}
      </div>
    </div>
  );
}

export default WhyUs;
