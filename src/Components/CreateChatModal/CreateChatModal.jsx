import React, { useRef, useState } from "react";
import "./CreateChatModal.scss";
import cross from "../../Assets/cross.svg";
import ChatRow from "../ChatRooms/ChatRow";
import UserRow from "./UserRow";
import { searchUser } from "../../Api/userApi";
import { createChat } from "../../Actions/chatActions";
import { useDispatch } from "react-redux";

const CreateChatModal = ({ handleModal }) => {
  const userSearch = useRef();
  const [users, setUsers] = useState();
  const [chatUsers, setChatUsers] = useState([]);
  const [chatUserNames, setChatUserNames] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const { value } = userSearch.current;
    if (value.length > 1) {
      const users = await searchUser(userSearch.current.value);
      setUsers(users.users);
    } else {
      setUsers([]);
    }
  };

  const handleAddToChat = ({ userId, username }) => {
    const isIncluded =
      chatUsers.includes(userId) | chatUserNames.includes(username);
    if (!isIncluded) {
      setChatUsers([...chatUsers, userId]);
      setChatUserNames([...chatUserNames, username]);
    } else {
      const newChatUsers = chatUsers.filter((chatUser) => chatUser !== userId);
      const newChatUserNames = chatUserNames.filter(
        (user) => user !== username
      );

      setChatUserNames(newChatUserNames);
      setChatUsers(newChatUsers);
    }
  };

  const handleCreateChat = async () => {
    try {
      const newChat = await dispatch(createChat(chatUsers));
      handleModal();
      console.log(newChat);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="create-chat-modal__overlay">
      <div className="create-chat-modal">
        <div className="create-chat-modal__header">
          <img src={cross} alt="" onClick={() => handleModal()} />
          <h6>New Message</h6>
          {chatUsers.length > 0 ? (
            <span className="active" onClick={() => handleCreateChat()}>
              Next
            </span>
          ) : (
            <span className="not-active">Next</span>
          )}
        </div>
        <div className="create-chat-modal__search">
          <span>To:</span>
          <div>
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
              ref={userSearch}
            />
          </div>

          {chatUserNames.length > 0 &&
            chatUserNames.map((username) => (
              <div className="create-chat-userToAdd">{username}</div>
            ))}
        </div>
        <div className="create-chat-modal__body">
          {users ? (
            users.map((user) => (
              <UserRow user={user} handleAddToChat={handleAddToChat} />
            ))
          ) : (
            <UserRow />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateChatModal;
