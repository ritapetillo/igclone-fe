import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostOptionV.scss"

const PostOptionsV = (props) => {

    return (<div className={props.show ? "wrapper-show" : "wrapper-hidden"} onClick={()=>props.close(!props.show)}> 
        <div className="popup-inner">
            <div className="option-wrap"><div className="option red">Report</div></div>
            <div className="divider"></div>
            <div className="option-wrap"><div className="option red">Unfollow</div></div>
            <div className="divider"></div>
            <div className="option-wrap"><div className="option">Go to post</div></div>
            <div className="divider"></div>
            <div className="option-wrap"><div className="option">Share to...</div></div>
            <div className="divider"></div>
            <div className="option-wrap"><div className="option">Copy link</div></div>
            <div className="divider"></div>
            <div className="option-wrap"><div className="option">Embed</div></div>
            <div className="divider"></div>
            <div className="option-wrap"><div className="option">Cancel</div></div>
        </div>
    </div>)
}

export default PostOptionsV