import React from "react";
import "./ChatSpace.scss";
import smily from "../../Assets/smile.svg";
import media from "../../Assets/media.svg";
import heart from "../../Assets/heart.svg";
import info from "../../Assets/info.svg";

const ChatSpace = () => {
  return (
    <div className="chat-space">
      <div className="chat-space__header">
        <div>
          <div className="chat-space__header-photo">
            <img src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
          </div>
          <span>username</span>
        </div>
        <img src={info} alt="" />
      </div>
      <div className="chat-space__body">
        <div className="chat-space__message received">
          somefdsfdsdfdsfsdfsdfsdfsdfsdfsdfdsfdsfdsfsdfdsfdsfdsfsfds text
        </div>
        <div className="chat-space__message sent">some text</div>
      </div>
      <div className="chat-space__footer">
        <span>
          <img src={smily} alt="emoji" />
        </span>

        <input type="text" placeholder="Message..." />
        <div>
          <img src={media} alt="media" className="mr-3" />
          <img src={heart} alt="heart" />
        </div>
      </div>
    </div>
  );
};

export default ChatSpace;
