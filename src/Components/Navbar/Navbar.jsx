import React, { useState, useEffect} from "react";
import "./Navbar.scss";

import Logo from "../../Assets/ig-logo.png";
//ICONS:
import {
  IoHomeOutline,
  IoCompassOutline,
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoRepeat,
  IoAddCircleOutline
} from "react-icons/io5";
import { CgProfile, CgBookmark } from "react-icons/cg";
import { RiSettings2Line } from "react-icons/ri";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../Actions/userActions";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [profileDD, setProfileDD] = useState(false);
  const [searchRes, setShowSR] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAction());
  }, []);

 
    const state = useSelector((state) => state)

    console.log("state", state)

  const searchResults = (e) => {
    if (e.target.value !== "") setShowSR(true);
    else setShowSR(false);
  };
    return (
        <>
        {/*--------------------- ALL OF THE DROPDOWNS ---------------------*/}
        <Dropdown setShow={() => setShow(!show)} show={show} size="notification" content={
            <div className="navbar-dropdown-content">
                <span className="dropdown-group-date">Today: </span>
                <div className="navbar-notification-core">
                    <div className="navbar-notification-info">
                        <div className="story-dropdown">
                            <img src="https://i.pravatar.cc/100" className="circle-dropdown" />
                        </div>
                        <div className="navbar-notification-text">
                            <span className="navbar-notification-username">**username**</span> started following you. <span className="navbar-notification-time"> 20h</span>
                        </div>
                    </div>
                    <div className="navbar-notification-follow">
                        <input type="button" className="navbar-notification-follow-button" value="Follow" />
                        {/* <input type="button" className="navbar-notification-unfollow-button" value="Following" /> */}
                    </div>
                </div>
                <div className="dropdown-divider"></div>
            </div>

        } />
        <Dropdown show={searchRes} size="search" content={
                    <div className="navbar-search-dropdown">
                        <div className="navbar-search-result">
                            <div className="story-dropdown">
                                <img src="https://i.pravatar.cc/100" className="circle-dropdown" />
                            </div>
                            <div className="navbar-search-result-info">
                                <span className="navbar-search-result-username">**username**</span>
                                <span className="navbar-search-result-details">followed by **another user**</span>
                            </div>
                        </div>
                    </div>
                } />
         <Dropdown size="profile" show={profileDD}
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
                                <div className="navbar-profile-dropdown-logout">
                                    Log out
                             </div>
                            </div>
                        } />

        {/*--------------------- NAVBAR ---------------------*/}
        <div className="nav-wrap">
            <div className="nav-bar-content">
                <Link to="/feed"> <img src={Logo} className="nav-bar-logo" /> </Link>
                <input className="search-input" placeholder="🔎 Search" onKeyUp={(e) => searchResults(e)} />
                
                <div className="profile-area">
                    <Link to="/feed"> <IoHomeOutline className="nav-icon" style={{ color: "black" }} /> </Link>
                    <Link to="/add_post"  > <IoAddCircleOutline className="nav-icon" style={{ color: "black" }} /> </Link>
                    <IoPaperPlaneOutline className="nav-icon" />
                    <IoCompassOutline className="nav-icon" />
                    <IoHeartOutline className="nav-icon margin-right-20px" onClick={() => setShow(!show)} />
                    
                    <img src="https://i.pravatar.cc/150" className="circle-sm" onClick={() => setProfileDD(!profileDD)} />
                   
                </div>
              </div>
            </div>
        </>
    )
}

export default Navbar;
