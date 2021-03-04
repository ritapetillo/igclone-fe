import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import "./Profile.scss"
import "../../Styling/Shapes.scss"

import { IoSettingsOutline } from "react-icons/io5"
import UserOptions from "../../Components/UserOptions/UserOptions"
import PostModal from "../../Components/PostModal/PostModal"
import { BsGrid3X3 } from "react-icons/bs"
import Igtv from "../../Assets/igtv.svg"
import Reel from "../../Assets/reel.svg"
import Save from "../../Assets/save.svg"
import Tagged from "../../Assets/tagged.svg"
import { getCurrentUserPostsAction } from "../../Actions/postActions"

import { editProfileAction, deleteProfileAction } from "../../Actions/userActions"
const Profile = () => {

    const [show, setShow] = useState("post")
    const [showModal, setShowModal] = useState(false)
    const [selected, setSelected] = useState()

    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const user = useSelector((state) => state.currentUser.user)
    console.log("State", state)


    useEffect(() => {
        dispatch(getCurrentUserPostsAction())
    }, []);


    const [showPost, setShowPost] = useState(false)
    const [editMode, setEditMode] = useState(false)
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
                        <span className="profile-info-username">{!editMode ? (user && user.currentUser?.username) : <input type="text" className="edit-mode__input" id="username" value={user && user.currentUser?.username} />}</span>
                        <input type="button" value={!editMode ? "Edit Profile" : "Save Profile"} className="profile-info-edit-user" onClick={!editMode ? () => setEditMode(true) : () => setEditMode(false)} />
                        <IoSettingsOutline className="profile-info-edit-settings" onClick={() => setShowModal(!showModal)} />
                        <UserOptions show={showModal} close={setShowModal} />
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
                                {user.currentUser?.followers.length}
                            </div>
                            <div className="profile-info-interaction-value">
                                followers
                            </div>
                        </div>

                        <div className="profile-info-interaction-single">
                            <div className="profile-info-interaction-number">
                                {user.currentUser?.following.length}
                            </div>
                            <div className="profile-info-interaction-value">
                                following
                            </div>
                        </div>
                    </div>
                    <div className="profile-info-bio">
                        <div className="profile-info-handle">
                            {!editMode ? (user?.currentUser && user?.currentUser.name) : <input type="text" value={user?.currentUser.name} className="edit-mode__input" id="name" />} {!editMode ? (user.currentUser && user.currentUser?.lastname) : <input type="text" value={user.currentUser?.lastname} className="edit-mode__input" id="lastname" />}
                        </div>
                        <div className="profile-info-bio-text">
                            {user.currentUser?.bio}
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------------------------STORY HIGHLIGHTS----------------------------- */}
            <div className="profile-story-highlights">
                <div className="profile-story-highlights-single">
                    <img className="circle-md" src="https://i.pravatar.cc/250" />
                    <span>Friends!!</span>
                </div>


            </div>
            <div className="profile-tabs">
                <div className={show !== "post" ? "profile-tabs-item" : "profile-tabs-item--selected"} onClick={() => setShow("post")}>
                    <BsGrid3X3 className="profile-tabs-item-logo" /> POSTS
                    </div>
                <div className={show !== "IGTV" ? "profile-tabs-item" : "profile-tabs-item--selected"} onClick={() => setShow("IGTV")}>
                    <img src={Igtv} className="profile-tabs-item-logo" /> IGTV
                    </div>
                <div className={show !== "reels" ? "profile-tabs-item" : "profile-tabs-item--selected"} onClick={() => setShow("reels")}>
                    <img src={Reel} className="profile-tabs-item-logo" /> REELS
                    </div>
                <div className={show !== "saved" ? "profile-tabs-item" : "profile-tabs-item--selected"} onClick={() => setShow("saved")} >
                    <img src={Save} className="profile-tabs-item-logo" /> SAVED
                    </div>
                <div className={show !== "tagged" ? "profile-tabs-item" : "profile-tabs-item--selected"} onClick={() => setShow("tagged")}>
                    <img src={Tagged} className="profile-tabs-item-logo" /> TAGGED
                    </div>
            </div>
            {/* -----------------------------POSTS----------------------------- */}
            <div className="profile-post">
                {state.post.currentUserPosts && state.post.currentUserPosts.map((post, index) =>
                    <>
                        <img src={post.image} className="profile-post-single" onClick={() => {
                            setSelected(post);
                            setShowPost(!showPost)
                        }} />
                    </>
                )}
                <PostModal show={showPost} close={setShowPost} content={selected} />
            </div>


        </div>
    )
}

export default Profile