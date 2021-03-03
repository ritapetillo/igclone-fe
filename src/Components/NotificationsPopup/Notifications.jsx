import React, { useState } from "react"
import "./Notifications.scss"
import { IoHeartOutline } from "react-icons/io5"
import Spinner from "../Spinner/Spinner"
import "../../Styling/Shapes.scss"

const Notifications = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="dropdown-wrap">
            <IoHeartOutline className="nav-icon" onClick={() => setShow(!show)} />
            <div className={show ? "dropdown-content-show" : "dropdown-hidden"}>
                    {/*<Spinner className="notification-spinner"/>*/}
                    <span className="notification-group-date">Today: </span> 
                    <div className="notification-core">
                        <img src="https://i.pravatar.cc/100" className="circle-notification"/>
                    </div>
                    <div className="notification-divider"></div>
                    <span className="notification-group-date">Yesterday: </span> 
                
            </div>
            <div className={show ? "dropdown-arrow-show" : "dropdown-hidden"}></div>
        </div>
    )
}

export default Notifications