import React from "react";
import "./MessageRight.css";

function MessageRight({data}) {
  return (
    <div className="msgRightContainer">
      <div className="msgTitle">
        <p>
          <p>{data.question}</p>
        </p>
      </div>
      <div className="msgText">
        <p>{data.answer}</p>
      </div>
    </div>
  );
}

export default MessageRight;
