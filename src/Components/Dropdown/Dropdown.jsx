import React, { useState } from "react"
import "./Dropdown.scss"
import { IoHeartOutline } from "react-icons/io5"
import Spinner from "../Spinner/Spinner"

const Dropdown = (props) => {
    return (
        <div className="dropdown-wrap">
            <div className={props.show ? "dropdown-content-show" : "dropdown-hidden"}>
                {/*<Spinner className="dropdown-spinner"/>*/}
                <div className="dropdown-core">
                    {props.content}
                </div>
            </div>
            <div className={props.show ? "dropdown-arrow-show" : "dropdown-hidden"}></div>
        </div>
    )
}

export default Dropdown