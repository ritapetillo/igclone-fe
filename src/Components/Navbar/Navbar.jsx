import React, { useState } from "react"
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
    IoHappyOutline
} from "react-icons/io5"
import { FaSearch } from "react-icons/fa"
import Dropdown from "../Dropdown/Dropdown" 


const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="nav-wrap">
            <div className="nav-bar-content">
                <img src={Logo} className="nav-bar-logo" />
                <input className="search-input" placeholder="🔎 Search" />
                <div className="profile-area">
                    <IoHomeOutline className="nav-icon" />
                    <IoPaperPlaneOutline className="nav-icon" />
                    <IoCompassOutline className="nav-icon" />
                    <IoHeartOutline className="nav-icon" onClick={() => setShow(!show)} />
                    <Dropdown setShow={() => setShow(!show)} show={show} content={
                        <div className="navbar-dropdown-content">
                            <span className="dropdown-group-date">Today: </span>
                            <img src="https://i.pravatar.cc/100" className="circle-dropdown" />
                            <div className="dropdown-divider"></div>
                        </div>
                       
                    } />
                    <img src="https://i.pravatar.cc/150" className="circle-sm" />
                </div>
            </div>
        </div>
    )
}

export default Navbar