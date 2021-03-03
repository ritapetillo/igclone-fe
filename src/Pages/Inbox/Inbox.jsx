import React from "react";
import ChatConversation from "../../Components/ChatConversation/ChatConversation";
import ChatRooms from "../../Components/ChatRooms/ChatRooms";
import "./Inbox.scss";

const Inbox = () => {
  return (
    <div className="inbox">
      <div className="inbox__box">
        <ChatRooms />
        <ChatConversation />
      </div>

      {/* All chats Component */}
      {/* Conversatin Components */}
    </div>
  );
};

export default Inbox;
