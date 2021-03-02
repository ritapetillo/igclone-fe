import React from "react"
import "./Notifications.scss"
import {IoHeartOutline} from "react-icons/io5"

const Notifications = (props) => {
    return (
    <div className="dropdown-wrap">
        <input type="checkbox" id="notifications" checked={false}/>
        <label for="1">
        <IoHeartOutline className="nav-icon" />
        <div className="dropdown-content">

        </div>
        </label>
        
        
        

  </div>
    )
}

export default Notifications