import React, { useState } from "react";
import "./UserRow.scss";

const UserRow = ({ user, handleAddToChat }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className="user-row"
      onClick={() => {
        user &&
          handleAddToChat({ userId: user?._id, username: user?.username });
        setSelected(!selected);
      }}
    >
      <div className="user-row__picture">
        {user?.imageUrl ? (
          <img src={user.imageUrl} alt="" />
        ) : (
          <img
            src={`https://ui-avatars.com/api/?name=${user?.name}+${user?.lastname}`}
            alt=""
          />
        )}
      </div>
      <div className="user-row__room-details">
        <h6>{user ? user.username : "Add a user to your chat"}</h6>
      </div>
      <div className={`user-row__cirlce ${selected && "selected"}`}>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default UserRow;
