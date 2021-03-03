import React from "react";
import "./UserRow.scss";

const UserRow = () => {
  return (
    <div className="user-row">
      <div className="user-row__picture">
        <img src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
      </div>
      <div className="user-row__room-details">
        <h6>username</h6>
      </div>
      <div className="user-row__cirlce">
        <div></div>
      </div>
    </div>
  );
};

export default UserRow;
