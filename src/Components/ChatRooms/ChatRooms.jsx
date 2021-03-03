import React, { useState } from "react";
import newMessageIcon from "../../Assets/newmessage.svg";
import arrowIcon from "../../Assets/arrow.svg";

import "./ChatRooms.scss";
import ChatRow from "./ChatRow";
import CreateChatModal from "../CreateChatModal/CreateChatModal";

const ChatRooms = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

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
        <ChatRow message={"ciocsfnsdjfndsfndsfsfd"} lastTime="1 hour" />
      </div>
      {modal && <CreateChatModal handleModal={handleModal} />}
    </div>
  );
};

export default ChatRooms;
