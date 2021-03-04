import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostOptionO.scss"

const PostOptionsO = (props) => {

    return (
        <div className={props.show ? "wrapper-show-owner" : "wrapper-hidden"} onClick={() => props.close(!props.show)}>
            <div className="popup-inner">
                <div className="option-wrap"><div className="option">Go to post</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option">Share to...</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option">Copy link</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option">Embed</div></div>
                <div className="divider"></div>
                <div className="option-wrap"><div className="option red">Delete</div></div>
                <div className="divider"></div>
                <div className="option-wrap" onClick={() => props.close(!props.show)}><div className="option">Cancel</div></div>
            </div>
        </div>
    )
}

export default PostOptionsO