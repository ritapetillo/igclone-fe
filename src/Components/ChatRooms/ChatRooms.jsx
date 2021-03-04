import React, { useState } from "react";
import newMessageIcon from "../../Assets/newmessage.svg";
import arrowIcon from "../../Assets/arrow.svg";

import "./ChatRooms.scss";
import ChatRow from "./ChatRow";
import CreateChatModal from "../CreateChatModal/CreateChatModal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getCurrentChat } from "../../Actions/chatActions";
import { PanoramaSharp } from "@material-ui/icons";

const ChatRooms = () => {
  const [modal, setModal] = useState(false);
  const params = useParams();
  const handleModal = () => {
    setModal(!modal);
  };
  const history = useHistory();
  const chatrooms = useSelector((state) => state.chat.rooms);
  const currentUser = useSelector(
    (state) => state.currentUser.user.currentUser
  );
  const dispatch = useDispatch();
  console.log(currentUser);
  const handleRoomChat = () => {
    history.push("/inbox/fsfd");
  };
  return (
    <div className="chat-rooms">
      <div className="chat-rooms__head">
        <h4>
          {currentUser?.username}
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
            // <Link to={`/inbox/${room._id}`}>
            <div
              onClick={() => {
                dispatch(getCurrentChat(room._id));
                history.push(`/inbox/${room._id}`);
              }}
            >
              <ChatRow
                // message={room.messages[room.messages.length - 1]}
                users={room.users.filter(
                  (user) => user?._id !== currentUser._id
                )}
                lastTime="1 hour"
                active={room._id == params.roomId}
              />
            </div>
          ))}
      </div>
      {modal && <CreateChatModal handleModal={handleModal} />}
    </div>
  );
};

export default ChatRooms;
