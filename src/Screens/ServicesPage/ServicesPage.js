import React from "react";
import ServicePageHero from "../../Components/ServicesPageHero/ServicePageHero";
import Offerings from "../../Components/Offerings/Offerings";
import Benefits from "../../Components/Benefits/Benefits";
import Faq from "../../Components/FAQ/Faq";
import topShade from "../../Assets/Ellipse 216.svg";
import bottomShade from "../../Assets/Ellipse 217.svg";
import { servicesData } from "../../Constants/Data/Data";

function ServicesPage() {
  return (
    <div className="relative">
      <ServicePageHero />
      <Offerings
        servicesData={servicesData.Services["Blockchain"]["Our Offerings"]}
      />
      <div className="absolute" style={{ top: "0px", left: "-3.681vw" }}>
        <img src={topShade} style={{ width: "14.306vw" }} />
      </div>
      <div className="absolute" style={{ top: "42.028vw", left: "0px" }}>
        <img src={bottomShade} style={{ width: "14.306vw" }} />
      </div>
      <Benefits
        heading="Blockchain"
        servicesData={servicesData.Services["Blockchain"]["Benefits"]}
      />
      <Faq servicesData={servicesData.Services["Blockchain"]["FAQs"]} />
    </div>
  );
}

export default ServicesPage;
