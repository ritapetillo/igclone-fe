import React from "react";
import "./ChatRow.scss";

const ChatRow = () => {
  return (
    <div className="chat-row">
      <div className="chat-row__picture">
        <img src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
      </div>
      <div className="chat-row__room-details">
        <h6>username</h6>
        <span classNmae="chat-row__text">
          somcsfsdsdfdsfsdfdsfdsfsdfdsfsdfdsfdsfsdfsdfdsfdsfdsfdsfdsfdsfsdfdsfsdfde
          text here
        </span>
      </div>
      <div className="chat-row__time">
        <span>Time</span>
      </div>
    </div>
  );
};

export default ChatRow;
