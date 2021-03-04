import React, { useRef, useState, useEffect } from "react";
import "./Navbar.scss";
import SearchResultRow from "../../Components/SearchResultRow/SearchResultRow";
import Logo from "../../Assets/ig-logo.png";
import Placeholder from "../../Assets/placeholder.png";
//ICONS:
import {
  IoHomeOutline,
  IoCompassOutline,
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoRepeat,
  IoAddCircleOutline,
} from "react-icons/io5";
import { CgProfile, CgBookmark } from "react-icons/cg";
import { RiSettings2Line } from "react-icons/ri";
import Dropdown from "../Dropdown/Dropdown";
import { searchUser } from "../../Api/userApi";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../Actions/userActions";

const Navbar = () => {
  const userSearch = useRef();
  const [users, setUsers] = useState();
  const [show, setShow] = useState(false);
  const [profileDD, setProfileDD] = useState(false);
  const [searchRes, setShowSR] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loginAction());
  }, []);

  const state = useSelector(state => state);

  const handleSearch = async () => {
    const { value } = userSearch.current;
    if (value.length > 1) {
      const users = await searchUser(userSearch.current.value);
      setUsers(users.users);
    } else {
      setUsers([]);
    }
  };

  // const searchResults = (e) => {
  //   if (e.target.value !== "") setShowSR(true);
  //   else setShowSR(false);
  // };

  return (
    <>
      {/*--------------------- ALL OF THE DROPDOWNS ---------------------*/}
      <Dropdown
        setShow={() => setShow(!show)}
        show={show}
        size="notification"
        content={
          <div className="navbar-dropdown-content">
            <span className="dropdown-group-date">Today: </span>
            <div className="navbar-notification-core">
              <div className="navbar-notification-info">
                <div className="story-dropdown">
                  <img
                    src="https://i.pravatar.cc/100"
                    className="circle-dropdown"
                  />
                </div>
                <div className="navbar-notification-text">
                  <span className="navbar-notification-username">
                    **username**
                  </span>{" "}
                  started following you.{" "}
                  <span className="navbar-notification-time"> 20h</span>
                </div>
              </div>
              <div className="navbar-notification-follow">
                <input
                  type="button"
                  className="navbar-notification-follow-button"
                  value="Follow"
                />
                {/* <input type="button" className="navbar-notification-unfollow-button" value="Following" /> */}
              </div>
            </div>
            <div className="dropdown-divider"></div>
          </div>
        }
      />
      <Dropdown
        setShowSR={() => setShowSR(!searchRes)}
        show={searchRes}
        size="search"
        content={
          <div className="navbar-search-dropdown" style={{display:"contents"}}>
            <div className="navbar-search-result" style={{display:"block"}}>
              {users ? users.map(user => <SearchResultRow user={user}/>) : <SearchResultRow />}
            </div>
          </div>
        }
      />

      <Dropdown
        size="profile"
        show={profileDD}
        content={
          <div className="navbar-profile-dropdown">
            <div className="navbar-profile-dropdown-option">
              <Link to="/profile">
                <CgProfile /> Profile
              </Link>
            </div>
            <div className="navbar-profile-dropdown-option">
              <CgBookmark /> Saved
            </div>
            <div className="navbar-profile-dropdown-option">
              <RiSettings2Line /> Settings
            </div>
            <div className="navbar-profile-dropdown-option">
              <IoRepeat /> Switch Accounts
            </div>
            <div className="dropdown-divider"></div>
            <div className="navbar-profile-dropdown-logout">Log out</div>
          </div>
        }
      />

      {/*--------------------- NAVBAR ---------------------*/}
      <div className="nav-wrap">
        <div className="nav-bar-content">
          <Link to="/feed">
            {" "}
            <img src={Logo} className="nav-bar-logo" />{" "}
          </Link>
          <input
            className="search-input"
            placeholder="🔎 Search"
            // onKeyUp={(e) => searchResults(e)}
            onChange={handleSearch}
            ref={userSearch}
            onClick={() => setShowSR(!searchRes)}

          />

          <div className="profile-area">
            <Link to="/feed">
              {" "}
              <IoHomeOutline
                className="nav-icon"
                style={{ color: "black" }}
              />{" "}
            </Link>
            <Link to="/add_post">
              {" "}
              <IoAddCircleOutline
                className="nav-icon"
                style={{ color: "black" }}
              />{" "}
            </Link>
            <Link to="/inbox"></Link>
            <IoPaperPlaneOutline className="nav-icon" />
            <Link />
            <IoCompassOutline className="nav-icon" />
            <IoHeartOutline
              className="nav-icon margin-right-20px"
              onClick={() => setShow(!show)}
            />

            <img
              src={
                state.currentUser.user.currentUser &&
                state.currentUser.user.currentUser.propic
                  ? state.currentUser.user.currentUser.propic
                  : Placeholder
              }
              className="circle-sm"
              onClick={() => setProfileDD(!profileDD)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
