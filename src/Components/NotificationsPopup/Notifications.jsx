import React from "react"
import "./Notifications.scss"
import {IoHeartOutline} from "react-icons/io5"
import Spinner from "../Spinner"

const Notifications = (props) => {
    return (
    <div className="dropdown-wrap">
        <IoHeartOutline className="nav-icon" />
        <div className="dropdown-content">
           <Spinner/> 
        </div>
        <div className="dropdown-arrow"></div>
  </div>
    )
}

export default Notifications