import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"

import "./Profile.scss"
import "../../Styling/Shapes.scss"

import { IoSettingsOutline } from "react-icons/io5"
import UserOptions from "../../Components/UserOptions/UserOptions"
import {BsGrid3X3} from "react-icons/bs"
import Igtv from "../../Assets/igtv.svg"
import Reel from "../../Assets/reel.svg"
import Save from "../../Assets/save.svg"
import Tagged from "../../Assets/tagged.svg"
import {getCurrentUserPostsAction} from "../../Actions/postActions"

const Profile = () => {
    const [show, setShow] = useState("post")
    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch();
    const state = useSelector((state)=> state)
    console.log("State", state)
  
  
    useEffect(() =>{
      dispatch(getCurrentUserPostsAction())
    }, []);
    return (
        <div className="profile-wrap">
            {/* -----------------------------HEADER----------------------------- */}
            <div className="profile-header">
                <div className="profile-pic">
                    <div className="story-lg">
                        <img className="circle-lg" src="https://i.pravatar.cc/250" />
                    </div>
                </div>
                <div className="profile-info">
                    <div className="profile-info-header">
                        <span className="profile-info-username">username</span>
                        <input type="button" value="Edit Profile" className="profile-info-edit-user"  />
                        <IoSettingsOutline className="profile-info-edit-settings" onClick={()=>setShowModal(!showModal)} />
                        <UserOptions show={showModal} close={setShowModal}/>
                    </div>
                    <div className="profile-info-interaction">
                        <div className="profile-info-interaction-single">
                            <div className="profile-info-interaction-number">
                                xx
                            </div>
                            <div className="profile-info-interaction-value">
                                posts
                            </div>
                        </div>

                        <div className="profile-info-interaction-single">
                            <div className="profile-info-interaction-number">
                                xxx
                            </div>
                            <div className="profile-info-interaction-value">
                                followers
                            </div>
                        </div>

                        <div className="profile-info-interaction-single">
                            <div className="profile-info-interaction-number">
                                xxx
                            </div>
                            <div className="profile-info-interaction-value">
                                following
                            </div>
                        </div>
                    </div>
                    <div className="profile-info-bio">
                        <div className="profile-info-handle">
                            complete name
                        </div>
                        <div className="profile-info-bio-text">
                            this is an instagram biography, it's a couple of lines long. Right?
                            It has a max length so there is no need for more and less buttons.
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------------------------STORY HIGHLIGHTS----------------------------- */}
            <div className="profile-story-highlights">
                    <div className="profile-story-highlights-single">
                        <img className="circle-md" src="https://i.pravatar.cc/250"/>
                        <span>Friends!!</span>
                    </div>

                    
            </div>
            <div className="profile-tabs">
                    <div className={ show !== "post" ? "profile-tabs-item": "profile-tabs-item--selected"} onClick={()=>setShow("post")}>
                        <BsGrid3X3 className="profile-tabs-item-logo"/> POSTS
                    </div>
                    <div className={ show !== "IGTV" ? "profile-tabs-item": "profile-tabs-item--selected"} onClick={()=>setShow("IGTV")}>
                        <img src={Igtv} className="profile-tabs-item-logo"/> IGTV
                    </div>
                    <div className={ show !=="reels" ? "profile-tabs-item": "profile-tabs-item--selected"} onClick={()=>setShow("reels")}>
                        <img src={Reel} className="profile-tabs-item-logo"/> REELS
                    </div>
                    <div className={ show !== "saved" ? "profile-tabs-item": "profile-tabs-item--selected"} onClick={()=>setShow("saved")} >
                        <img src={Save} className="profile-tabs-item-logo"/> SAVED
                    </div>
                    <div className={ show!=="tagged" ? "profile-tabs-item": "profile-tabs-item--selected"} onClick={()=>setShow("tagged")}>
                        <img src={Tagged} className="profile-tabs-item-logo"/> TAGGED
                    </div>
            </div>
                {/* -----------------------------POSTS----------------------------- */}
            <div className="profile-post">
                    <img src="https://picsum.photos/600" className="profile-post-single"/>
                    <img src="https://picsum.photos/600" className="profile-post-single"/>
                    <img src="https://picsum.photos/600" className="profile-post-single"/>
                    <img src="https://picsum.photos/600" className="profile-post-single"/>
                    <img src="https://picsum.photos/600" className="profile-post-single"/>
                    <img src="https://picsum.photos/600" className="profile-post-single"/>
                    <img src="https://picsum.photos/600" className="profile-post-single"/>
                    <img src="https://picsum.photos/600" className="profile-post-single"/>
            </div>
        </div>
    )
}

export default Profile