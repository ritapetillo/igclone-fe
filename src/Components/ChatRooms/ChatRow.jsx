import React from "react";
import { useParams } from "react-router-dom";
import "./ChatRow.scss";

const ChatRow = ({ message, lastTime, users, active }) => {
  console.log(users);
  const param = useParams();
  console.log(param);
  return (
    <div className={"chat-row " + (active && "active")}>
      <div className="chat-row__picture">
        {users.length == 1 ? (
          <img src={users[0].imageUrl} alt="" />
        ) : (
          <img src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
        )}
      </div>
      <div className="chat-row__room-details">
        {users.map((user) => (
          <h6>{user.username}</h6>
        ))}

        <span classNmae="chat-row__text">{message && message}</span>
      </div>
      <div className="chat-row__time">
        {/* <span>1hr</span> */}
        {/* {lastTime & lastTime} */}
      </div>
    </div>
  );
};

export default ChatRow;
