import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./GenericHero.css";
import LeftCube from "../../Assets/cube.gif";
import Shade from "../../Assets/EllipseTrasformation.svg";
// import LeftCube from '../../Assets/cube.gif'
const windowWidth = window.screen.width;

function GenericHero({
  sideImage,
  imageWidth,
  backgroundColor,
  text,
  dualColor = false,
  dualText = "",
  textColor,
  backgroundColorLeft,
  backgroundColorRight,
  rightColor,
  leftColor,
}) {

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 786);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 786);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div
      style={{ backgroundColor: `${backgroundColor}` }}
      className="hero-container flex flex-center relative"
    >

      <div style={{ width: "100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center" }}>
      {isMobileView && (
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={sideImage}
              style={{ maxWidth: "100%", width: `${imageWidth}px` }}
            />
          </div>
        )}
        <div
          style={{ color: `${textColor}` }}
          className="hero-title heading-text"
        >
          <p className="">
            {text}
            {dualColor ? (
              <span className="focused-color"> {dualText}</span>
            ) : (
              ""
            )}
          </p>
        </div>
        <div className="flex flex-center gap24 mt-80 main-btn">
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
      </div>

      {!isMobileView && (
        <div style={{ width: "40.306vw" }} className="heroImage">
          <img src={sideImage} style={{ width: "40.306vw" }} />
        </div>
      )}
    </div>
  );
}

export default GenericHero;
