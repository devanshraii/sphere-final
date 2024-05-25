import React from "react";
import GenericHero from "../../../Generic/GenericHero/GenericHero";
import RoboticHero from "../../../Assets/RoboticHero.svg";
import Offerings from "../../../Components/Offerings/Offerings";
import Benefits from "../../../Components/Benefits/Benefits";
import Faq from "../../../Components/FAQ/Faq";
import { servicesData } from "../../../Constants/Data/Data";

function Robotic() {
  const imageWidth = "43.472vw";
  const backgroundColor = "#63AFC9";
  const text =
    "Unleash the power of Automation: RPA Solutions for Modern Businesses";
  const textColor = "white";
  const backgroundColorLeft = "white";
  const backgroundColorRight = "#63AFC9";
  const rightColor = "white";
  const leftColor = "#5D5A88";
  return (
    <>
      <GenericHero
        sideImage={RoboticHero}
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
          servicesData.Services["Robotic Process Automation"]["Our Offerings"]
        }
      />
      <Benefits
        heading="Robotic Process Automation"
        servicesData={
          servicesData.Services["Robotic Process Automation"]["Benefits"]
        }
      />
      <Faq
        servicesData={
          servicesData.Services["Robotic Process Automation"]["FAQs"]
        }
      />
    </>
  );
}

export default Robotic;
