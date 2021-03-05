import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOutsideClick from "../../CustomHooks/useClickOutside";
import "../CreateChatModal/UserRow.scss";

const SearchResultRow = ({ user, handleCloseSearch }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className="user-row"
      onClick={handleCloseSearch}
      style={{
        padding: "5px",
        overflow: "auto",
      }}
    >
      <div
        className="user-row__picture"
        style={{
          // borderRadius: "50%",
          overflow: "none",
          padding: "5px",
          overflow: "visible",
          borderRadius: "50%",
        }}
      >
        {user?.imageUrl ? (
          <img
            src={user.imageUrl}
            alt=""
            style={{
              borderRadius: "50%",
              overflow: "visible",
              height: "40px",
              width: "40px",
              marginRight: "40px",
            }}
          />
        ) : (
          <img
            style={{
              borderRadius: "50%",
              overflow: "visible",
              height: "40px",
              width: "40px",
              marginRight: "40px",
            }}
            src={`https://ui-avatars.com/api/?name=${user?.name}+${user?.lastname}`}
            alt=""
          />
        )}
      </div>
      <div className="user-row__room-details">
        <h6
          style={{
            marginLeft: "20px",
          }}
        >
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
