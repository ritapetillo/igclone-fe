import React, { useRef, useEffect, useState, useMemo, useContext } from "react";
import "./ChatSpace.scss";
import smily from "../../Assets/smile.svg";
import media from "../../Assets/media.svg";
import heart from "../../Assets/heart.svg";
import info from "../../Assets/info.svg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentChat } from "../../Actions/chatActions";
import { socketContext } from "../../Context/SocketContext";
const arrayMsg = [];
const ChatSpace = () => {
  const params = useParams();
  const disaptch = useDispatch();
  const currentRoom = useSelector((state) => state.chat.current_room);
  const currentUser = useSelector(
    (state) => state.currentUser.user.currentUser
  );
  const text = useRef();
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messageSpace = useRef();
  const { socket } = useContext(socketContext);
  console.log(socket);

  useEffect(() => {
    disaptch(getCurrentChat(params.roomId));
    scrollDown();
  }, [params]);

  useEffect(() => {
    scrollDown();
  }, [currentRoom]);
  const scrollDown = () => {
    messageSpace.current.scrollTop = messageSpace.current.scrollHeight;
  };

  useEffect(() => {
    scrollDown();
    console.log(socket);
    if (socket) {
      socket.on("message", (message) => {
        console.log("dsfds");
        console.log(message);
        arrayMsg.push(message);
        setMessages([]);
        const newMessages = messages.push(message);
        scrollDown();
      });
      socket.on("isTyping", (status) => {
        console.log("typing");

        setIsTyping(status);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    if (socket) {
      socket.emit("typing", { roomId: params.roomId, status: true });
      const message = {
        text: text.current.value,
        roomId: params.roomId,
      };
      if (e.key === "Enter") {
        socket.emit("sendMessage", message);
        text.current.value = "";
      }
    }
  };

  const notTheCurrentUser = useMemo(() => {
    if (currentRoom.users)
      return currentRoom?.users?.filter((user) => user._id !== currentUser._id);
    else return [];
  }, [currentUser, currentRoom]);

  return (
    <div className="chat-space">
      <div className="chat-space__header">
        <div>
          <div className="chat-space__header-photo">
            {notTheCurrentUser && notTheCurrentUser.length < 2 ? (
              <img src={notTheCurrentUser[0]?.imageUrl} alt="" />
            ) : (
              <img src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
            )}
          </div>
          {notTheCurrentUser?.map((user) => (
            <span>{user.username}</span>
          ))}
        </div>
        <img src={info} alt="" />
      </div>
      <div className="chat-space__body">
        <div className="chat-space__body-message-space" ref={messageSpace}>
          {currentRoom.messages &&
            currentUser &&
            currentRoom?.messages?.map((message) => (
              <div
                className={
                  "chat-space__message " +
                  (message.sender != currentUser._id ? "received" : "sent")
                }
              >
                {message.text}
              </div>
            ))}
          {arrayMsg.map((message) => (
            <div
              className={
                "chat-space__message " +
                (message.sender != currentUser._id ? "received" : "sent")
              }
            >
              {message.text}
            </div>
          ))}
          <div class="anchor"></div>
        </div>
      </div>
      <div className="chat-space__message-typing">
        {isTyping && <p>is typing...</p>}
      </div>
      <div className="chat-space__footer">
        <span>
          <img src={smily} alt="emoji" />
        </span>

        <input
          ref={text}
          type="text"
          placeholder="Message..."
          onKeyPress={handleSubmit}
          onKeyUp={() =>
            socket.emit("typing", { roomId: params.roomId, status: false })
          }
        />
        <div className="d-flex">
          <img src={media} alt="media" className="mr-3" />
          <img src={heart} alt="heart" />
        </div>
      </div>
    </div>
  );
};

export default ChatSpace;
