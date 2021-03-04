import React, { useMemo } from "react";
import SendIcon from "@material-ui/icons/Send";

import "./ChatConversation.scss";
import { Button } from "react-bootstrap";
import ChatSpace from "./ChatSpace";
import { useParams } from "react-router-dom";

const ChatConversation = ({ socket }) => {
  const params = useParams();
  console.log(params);
  const chatSpace = useMemo(() => {
    if (!params.roomId) {
      return (
        <div className="chat-conversation__empty">
          <SendIcon />
          <h5>Your Messages</h5>
          <span>Send private photos and messages to a friend or group.</span>

          <Button className="mt-3">Send Message</Button>
        </div>
      );
    } else {
      return <ChatSpace socket={socket} />;
    }
  }, [params]);
  return <div className="chat-conversation">{chatSpace}</div>;
};

export default ChatConversation;
