import React, {useState} from "react"
import "./Navbar.scss"

import Logo from "../../Assets/ig-logo.png"
//ICONS:
import { 
    IoHomeOutline,
    IoCompassOutline,
    IoHeartOutline, 
    IoSearch,
    IoPaperPlaneOutline,
    IoHeartSharp,
    IoHappyOutline } from "react-icons/io5"
import {FaSearch} from "react-icons/fa"
import Notifications from "../NotificationsPopup/Notifications"


const Navbar = () => {
    const [showNot, setNot] = useState(false)
    const checkOnClick = (data) => {
        setNot(data)
    }
    return(
        <div className="nav-wrap">
            <div className="nav-bar-content">
                <img src={Logo} className="nav-bar-logo"/>
            <input className="search-input" placeholder="🔎 Search"/>
            <div className="profile-area">
                <IoHomeOutline className="nav-icon"/>
                <IoPaperPlaneOutline className="nav-icon"/>
                <IoCompassOutline className="nav-icon"/>
                <Notifications setShow={checkOnClick} show={showNot}/>
                <img src="https://i.pravatar.cc/150" className="circle-sm"/>
            </div>
            </div>
        </div>
    )
}

export default Navbar