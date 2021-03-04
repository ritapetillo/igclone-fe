import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CreateChatModal/UserRow.scss";

const SearchResultRow = ({ user }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="user-row">
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
        <h6>
          {" "}
          {user ? (
            <Link to={`/profile/${user.username}`}>{user.username}</Link>
          ) : (
            "No results found"
          )}
        </h6>
      </div>
      <div className={`user-row__cirlce ${selected && "selected"}`}></div>
    </div>
  );
};

export default SearchResultRow;
