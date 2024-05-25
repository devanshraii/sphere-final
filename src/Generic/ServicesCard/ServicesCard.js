import React, { useState } from "react";
import "./ServicesCard.css";
import Icon from "../../Assets/image 3icon.svg";
import RightArrow from "../../Assets/Arrow Right.svg";
import { useNavigate } from 'react-router-dom';
import { Data } from "../../Constants/Data/Data";

function ServicesCard({ data, hover = false }) {

  const navigate = useNavigate();
  const handleLearnMore = () => {
    
   
    
    navigate(data.path); 
  };
  const [onHover, setOnHover] = useState(false);
  return (
    <div onClick={handleLearnMore}
      className="ServicescardContainer flex flex-column flex-center"
      onMouseOver={() => setOnHover(true)}
      onMouseOut={() => setOnHover(false)}
    >
      <div className="w">
        {onHover ? (
          <img src={data.hoverImage} className="service-icon" />
        ) : (
          <img src={data.image} className="service-icon" />
        )}
      </div>
      <div className="text-center">
        <p className="title-text">{data.title}</p>
        <p className="cardText text text-left">{data.discription}</p>
      </div>
      <div className="button-text Learn-more flex flex-center gap2" >
        Learn more{" "}
        <span>
          <img className="arrow" src={RightArrow} alt=">" />
        </span>
      </div>
    </div>
  );
}

export default ServicesCard;
