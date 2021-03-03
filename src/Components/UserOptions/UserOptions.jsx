import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserOptions.scss"

const UserOptions = (props) => {

    return (
        <div className={props.show ? "wrapper-show" : "wrapper-hidden"} onClick={() => props.close(!props.show)}>
            <div className="popup-inner">
                <div className="option-wrap"><div className="option">Edit password</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option">Nametag</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option">App and website</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option">Notifications</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option">Privacy and access</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option">Access settings</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option">Instagram's email</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option">Send feedback</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option red">Log out</div></div>
                <div className="divider"></div>
                <div className="option-wrap" onClick={() => props.close(!props.show)}><div className="option">Cancel</div></div>
            </div>
        </div>
    )
}

export default UserOptions