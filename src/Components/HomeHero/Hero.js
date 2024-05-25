import React from "react";
import "./Hero.css";
import LeftCube from "../../Assets/cube.gif";
import RightImage from "../../Assets/Group 39491.svg";
import bottomRing from "../../Assets/Blend Group 1.svg";
import Button from "../../Generic/Button/Button";
import { useNavigate } from 'react-router-dom';

const windowWidth = window.screen.width;
console.log("windowWidth", windowWidth);

function Hero() {

  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };
  const backgroundColorLeft = "#FFFFFF";
  const backgroundColorRight = "black";
  const rightColor = "white";
  const leftColor = "black";
  return (
    <div>
      <div className="hero flex flex-center">
        {/* <div className="heading-text headingContainer">
          <p className="heading-text-main">
            Maximize Efficiency through Advanced Automation Solutions
          </p>
          <div className="subHeading button-text text-white">
            <p className="welcome-text">
              Welcome to Sphere Tech Labs, where Innovation meets
              Transformation!
            </p>
          </div>
          <div className="flex flex-center buttonContainer">
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
        </div> */}

        <div className="heading-text headingContainer flex flex-column flex-center">
          <p className="heading-text-main">
            Maximize Efficiency through Advanced Automation Solutions
          </p>
          <div className="subHeading button-text text-white">
            <p className="welcome-text">
              Welcome to Sphere Tech Labs, where Innovation meets
              Transformation!
            </p>
          </div>
          <div className="flex flex-center buttonContainer">
            
            <Button
              onClick={() => handleRedirect('/Contact')}
              backgroundColor="#FFFFFF"
              color="black"
              text="Get started"
              arrow={true}
            />
            <Button
              onClick={() => handleRedirect('/Contact')}
              backgroundColor="black"
              color="white"
              text="Talk to sales"
              arrow={false}
            />
          </div>
        </div>

        {/* <div className='test cube'>
                    <img src={LeftCube} />
                </div>
                <div className='bottomCube cube'>
                    <img src={LeftCube} />
                </div> */}

        <div className="rightImage">
          <img src={RightImage} />
        </div>
        <div className="bottomRing">
          <img src={bottomRing} style={{ width: "28.451vw" }} />
        </div>

        {/* <div className='test2'>
                    <img src={bottomRing} />
                </div> */}
      </div>
    </div>
  );
}

export default Hero;
