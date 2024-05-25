import React from "react";
import "./ServicePageHero.css";
import Cube from "../../Assets/cube.svg";
import Button from "../../Generic/Button/Button";

const windowWidth = window.screen.width;

function ServicePageHero() {
  const backgroundColorLeft = "#FFFFFF";
  const backgroundColorRight = "black";
  const rightColor = "white";
  const leftColor = "black";
  return (
    <div className="ServicePageHeroContainer flex flex-space-between">
      <div className="leftContainer">
        {windowWidth < 786 && (
          <div>
            <img className="HeroImg1" src={Cube} />
          </div>
        )}
        <div className="heroText Title-text">
          Blockchain Solutions to build <br /> trust, where transparency
          <br /> meets technology
        </div>
        {/* <div className="flex flex-space-around buttonContainer">
          <div className="whiteButton heroButton">Get started...</div>
          <div className="blackButton heroButton">Talk to sales</div>
        </div> */}
        <div className="flex flex-center gap24 buttonContainer">
          <Button
            backgroundColor={backgroundColorLeft}
            color={leftColor}
            text={"Get started"}
            arrow={true}
          />
          <Button
            backgroundColor={backgroundColorRight}
            color={rightColor}
            text={"Talk to sales"}
            arrow={false}
          />
        </div>
        {/* <div className="ButtonCaontainer">
          <button> Get Started</button>
          <button> Talk to sales</button>
        </div> */}
      </div>
      {windowWidth > 786 && (
        <div>
          <img className="HeroImg" src={Cube} />
        </div>
      )}
    </div>
  );
}

export default ServicePageHero;
