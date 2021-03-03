import React, { useEffect } from "react";
import ChatConversation from "../../Components/ChatConversation/ChatConversation";
import ChatRooms from "../../Components/ChatRooms/ChatRooms";
import "./Inbox.scss";
import { useDispatch } from "react-redux";
import useSocket from "use-socket.io-client";
import { getAllUserChats } from "../../Actions/chatActions";

const Inbox = () => {
  const [socket] = useSocket(process.env.REACT_APP_API_URI);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserChats());
    socket.connect();
    socket.emit("joinRoom", () => {
      console.log("joined Rooms");
    });

    return () => {
      socket.emit("disconnect");
    };
  }, []);

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
