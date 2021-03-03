import React from "react";
import "./CreateChatModal.scss";
import cross from "../../Assets/cross.svg";
import ChatRow from "../ChatRooms/ChatRow";
import UserRow from "./UserRow";

const CreateChatModal = ({ handleModal }) => {
  return (
    <div className="create-chat-modal__overlay">
      <div className="create-chat-modal">
        <div className="create-chat-modal__header">
          <img src={cross} alt="" onClick={() => handleModal()} />
          <h6>New Message</h6>
          <span className="not-active">Next</span>
        </div>
        <div className="create-chat-modal__search">
          <span>To:</span>
          <div>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="create-chat-modal__body">
          <UserRow />
        </div>
      </div>
    </div>
  );
};

export default CreateChatModal;
