import React from "react";
import GenericHero from "../../../Generic/GenericHero/GenericHero";
import AIMLimage from "../../../Assets/AI_ML 2.svg";
import Offerings from "../../../Components/Offerings/Offerings";
import Benefits from "../../../Components/Benefits/Benefits";
import Faq from "../../../Components/FAQ/Faq";
import topShade from "../../../Assets/Ellipse 216.svg";
import bottomShade from "../../../Assets/Ellipse 217.svg";
import { servicesData } from "../../../Constants/Data/Data";

function AimlScreen() {
  const imageWidth = "44.306vw";
  const backgroundColor = "#F3E6D3";
  const text =
    "Empower your business for the future through automation and intelligent decision-making with our";
  const dualText = "AI & Machine Learning solutions";
  const textColor = "black";
  const backgroundColorLeft = "#FFFFFF";
  const backgroundColorRight = "#F3E6D3";
  const rightColor = "#5D5A88";
  const leftColor = "#000000";

  return (
    <div className="relative">
      <GenericHero
        sideImage={AIMLimage}
        imageWidth={imageWidth}
        backgroundColor={backgroundColor}
        text={text}
        dualText={dualText}
        dualColor={true}
        backgroundColorLeft={backgroundColorLeft}
        backgroundColorRight={backgroundColorRight}
        rightColor={rightColor}
        leftColor={leftColor}
        textColor={textColor}
      />
      <Offerings
        servicesData={
          servicesData.Services["AI & ML Services"]["Our Offerings"]
        }
      />
      <div className="absolute" style={{ top: "0px", left: "-0.681vw" }}>
        <img src={topShade} style={{ width: "14.306vw" }} />
      </div>
      <div className="absolute" style={{ top: "28.028vw", left: "0px" }}>
        <img src={bottomShade} style={{ width: "14.306vw" }} />
      </div>
      <Benefits
        heading="AI & Machine Learning"
        servicesData={servicesData.Services["AI & ML Services"]["Benefits"]}
      />
      <Faq servicesData={servicesData.Services["AI & ML Services"]["FAQs"]} />
    </div>
  );
}

export default AimlScreen;
