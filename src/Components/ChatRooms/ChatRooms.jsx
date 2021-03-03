import React, { useState } from "react";
import newMessageIcon from "../../Assets/newmessage.svg";
import arrowIcon from "../../Assets/arrow.svg";

import "./ChatRooms.scss";
import ChatRow from "./ChatRow";
import CreateChatModal from "../CreateChatModal/CreateChatModal";
import { useSelector } from "react-redux";

const ChatRooms = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const chatrooms = useSelector((state) => state.chat.rooms);
  const currentUser = useSelector((state) => state.user.user.currentUser);

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
        <img
          src={newMessageIcon}
          alt=""
          className="chat-rooms__new-message"
          onClick={() => handleModal()}
        />
      </div>
      <div className="chat-rooms__list">
        {chatrooms &&
          currentUser &&
          chatrooms.map((room) => (
            <ChatRow
              message={room.messages[room.messages.length - 1]}
              users={room.users.filter((user) => user?._id !== currentUser._id)}
              lastTime="1 hour"
            />
          ))}
      </div>
      {modal && <CreateChatModal handleModal={handleModal} />}
    </div>
  );
};

export default ChatRooms;
