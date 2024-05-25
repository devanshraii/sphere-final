import React from "react";
import GenericHero from "../../../Generic/GenericHero/GenericHero";
import CloudHero from "../../../Assets/CloudHero.svg";
import Offerings from "../../../Components/Offerings/Offerings";
import Benefits from "../../../Components/Benefits/Benefits";
import Faq from "../../../Components/FAQ/Faq";
import { servicesData } from "../../../Constants/Data/Data";

function Cloud() {
  const imageWidth = "44.306vw";
  const backgroundColor = "#841FF5";
  const text = "Empower your journey to the cloud.";
  const textColor = "white";
  const backgroundColorLeft = "white";
  const backgroundColorRight = "#841FF5";
  const rightColor = "white";
  const leftColor = "#5D5A88";
  return (
    <>
      <GenericHero
        sideImage={CloudHero}
        imageWidth={imageWidth}
        backgroundColor={backgroundColor}
        text={text}
        textColor={textColor}
        backgroundColorLeft={backgroundColorLeft}
        backgroundColorRight={backgroundColorRight}
        rightColor={rightColor}
        leftColor={leftColor}
      />
      <Offerings
        servicesData={
          servicesData.Services["Cloud Transformation"]["Our Offerings"]
        }
      />
      <Benefits
        heading="Cloud Transformation"
        servicesData={servicesData.Services["Cloud Transformation"]["Benefits"]}
      />
      <Faq
        servicesData={servicesData.Services["Cloud Transformation"]["FAQs"]}
      />
    </>
  );
}

export default Cloud;
