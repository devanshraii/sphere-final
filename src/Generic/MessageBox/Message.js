import React from "react";
import "./Message.css";

function Message({ data }) {
  return (
    <div className="msgContainer">
      <div className="msgTitle">
        <p>{data.question}</p>
      </div>
      <div className="msgText">
        <p>{data.answer}</p>
      </div>
    </div>
  );
}

export default Message;
