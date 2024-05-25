import React from "react";
import Message from "../../Generic/MessageBox/Message";
import MessageRight from "../../Generic/MessageRight/MessageRight";
import "./Faq.css";

function Faq({ servicesData }) {
  return (
    <div className="main-container faqMain">
      <div className="subheading-text focused-color text-center">
        <p>FAQs</p>
      </div>
      <div>
        <div className="left">
          <Message data={servicesData[0]} />
        </div>
        <div className="right">
          <MessageRight data={servicesData[1]} />
        </div>
        <div className="left">
          <Message data={servicesData[2]} />
        </div>
      </div>
    </div>
  );
}

export default Faq;
