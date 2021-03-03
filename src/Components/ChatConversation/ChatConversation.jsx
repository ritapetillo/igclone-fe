import React from "react";
import SendIcon from "@material-ui/icons/Send";

import "./ChatConversation.scss";
import { Button } from "react-bootstrap";

const ChatConversation = () => {
  return (
    <div className="chat-conversation">
      <div className="chat-conversation__empty">
        <SendIcon />
        <h5>Your Messages</h5>
        <span>Send private photos and messages to a friend or group.</span>

        <Button className="mt-3">Send Message</Button>
      </div>
      {/* <div className="chat-conversation__room">
        <div className="chat-conversation__room-header">
          <img src="" alt="" />
          <span>username</span>
          info
        </div>
        <div className="chat-conversation__room-body">
          <div className="chat-conversation__room-message received">
            some text
          </div>
          <div className="chat-conversation__room-message sent">some text</div>
        </div>
        <div className="chat-conversation__room-send">
          <span>face</span>
          <input type="text" />
          <span>media</span>
          <span>heart</span>
        </div>
      </div> */}
    </div>
  );
};

export default ChatConversation;
