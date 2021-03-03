import React from "react";
import newMessageIcon from "../../Assets/newmessage.svg";
import arrowIcon from "../../Assets/arrow.svg";

import "./ChatRooms.scss";
import ChatRow from "./ChatRow";

const ChatRooms = () => {
  return (
    <div className="chat-rooms">
      <div className="chat-rooms__head">
        <h4>
          ritapetill
          <span>
            {" "}
            <img src={arrowIcon} alt="" className="arrow-icon" />
          </span>
        </h4>
        <img src={newMessageIcon} alt="" className="chat-rooms__new-message" />
      </div>
      <div className="chat-rooms__list">
        <ChatRow />
      </div>
    </div>
  );
};

export default ChatRooms;
