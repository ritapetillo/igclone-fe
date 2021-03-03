import React from "react";
import SendIcon from "@material-ui/icons/Send";

import "./ChatConversation.scss";
import { Button } from "react-bootstrap";
import ChatSpace from "./ChatSpace";

const ChatConversation = () => {
  return (
    <div className="chat-conversation">
      {/* <div className="chat-conversation__empty">
        <SendIcon />
        <h5>Your Messages</h5>
        <span>Send private photos and messages to a friend or group.</span>

        <Button className="mt-3">Send Message</Button>
      </div> */}
      <ChatSpace />
    </div>
  );
};

export default ChatConversation;
