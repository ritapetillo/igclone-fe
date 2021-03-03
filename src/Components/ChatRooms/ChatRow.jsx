import React from "react";
import "./ChatRow.scss";

const ChatRow = ({ message, lastTime }) => {
  return (
    <div className="chat-row">
      <div className="chat-row__picture">
        <img src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
      </div>
      <div className="chat-row__room-details">
        <h6>username</h6>
        <span classNmae="chat-row__text">{message && message}</span>
      </div>
      <div className="chat-row__time">
        <span>1hr</span>
        {lastTime & lastTime}
      </div>
    </div>
  );
};

export default ChatRow;
