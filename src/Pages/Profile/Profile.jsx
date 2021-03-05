import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import "./Profile.scss"
import "../../Styling/Shapes.scss"

import { BsGrid3X3 } from "react-icons/bs"
import { IoSettingsOutline } from "react-icons/io5"

import UserOptions from "../../Components/UserOptions/UserOptions"
import PostModal from "../../Components/PostModal/PostModal"

import Igtv from "../../Assets/igtv.svg"
import Reel from "../../Assets/reel.svg"
import Save from "../../Assets/save.svg"
import Tagged from "../../Assets/tagged.svg"
import Placeholder from "../../Assets/placeholder.png"

import { getCurrentUserPostsAction } from "../../Actions/postActions"
import {changeProfilePictureAction} from "../../Actions/userActions"
import { editProfileAction, deleteProfileAction } from "../../Actions/userActions"

const Profile = () => {

    const [show, setShow] = useState("post")
    const [showModal, setShowModal] = useState(false)
    const [selected, setSelected] = useState()
    const [profile, setProfile] = useState()
    const [showPost, setShowPost] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [file, setFile] = useState()
    
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const saveNewProfile = async () => {

        dispatch(editProfileAction({
            name: profile.name,
            lastname: profile.lastname,
            username: profile.username,
            bio: profile.bio
        }
        ))
        setEditMode(false)
    }

    const onChangeHandler = (e) => {
        setProfile({ ...profile, [e.target.id]: e.target.value })
    }
    useEffect(() => {
        dispatch(getCurrentUserPostsAction())
        {
            state.currentUser.user.currentUser && setProfile(
                {
                    username: state.currentUser.user.currentUser.username,
                    name: state.currentUser.user.currentUser.name,
                    lastname: state.currentUser.user.currentUser.lastname,
                    bio: state.currentUser.user.currentUser.bio,
                    followers: state.currentUser.user.currentUser.followers,
                    following: state.currentUser.user.currentUser.following,
                    imageUrl: state.currentUser.user.currentUser.imageUrl
                })
        }
    }, []);

    const propicInput = (file) => {
        setFile(file)
        const fd = new FormData
        fd.append("image", file)
        dispatch(changeProfilePictureAction(fd))
        
    } 

    return (
        <div className="profile-wrap">
            {/* -----------------------------HEADER----------------------------- */}
            <div className="profile-header">
                <div className="profile-pic">
                    <input type="file" style={{ display: "none" }} id="propic" onChange={(e)=>propicInput(e.target.files[0])} />
                    <label for="propic">
                        <div className="story-lg">
                            <img className="circle-lg" src={profile && profile.imageUrl ? profile.imageUrl : Placeholder} />
                        </div>
                    </label>
                </div>
                <div className="profile-info">
                    <div className="profile-info-header">
                        <span className="profile-info-username">{!editMode
                            ? (profile && profile.username)
                            : <input type="text" className="edit-mode__input" id="username" onChange={(e) => onChangeHandler(e)} value={profile && profile.username} />}</span>
                        <input type="button" value={!editMode ? "Edit Profile" : "Save Profile"} className="profile-info-edit-user" onClick={!editMode ? () => setEditMode(true) : () => saveNewProfile()} />
                        <IoSettingsOutline className="profile-info-edit-settings" onClick={() => setShowModal(!showModal)} />
                        <UserOptions show={showModal} close={setShowModal} />
                    </div>
                    <div className="profile-info-interaction">
                        <div className="profile-info-interaction-single">
                            <div className="profile-info-interaction-number">
                                {state.post.currentUserPosts ? state.post.currentUserPosts.length : 0}
                            </div>
                            <div className="profile-info-interaction-value">
                                posts
                            </div>
                        </div>

                        <div className="profile-info-interaction-single">
                            <div className="profile-info-interaction-number">
                                {profile && profile.followers.length}
                            </div>
                            <div className="profile-info-interaction-value">
                                followers
                            </div>
                        </div>

                        <div className="profile-info-interaction-single">
                            <div className="profile-info-interaction-number">
                                {profile && profile.following.length}
                            </div>
                            <div className="profile-info-interaction-value">
                                following
                            </div>
                        </div>
                    </div>
                    <div className="profile-info-bio">
                        <div className="profile-info-handle">
                            {!editMode
                                ? (profile && profile.name + " ")
                                : <input type="text" value={profile && profile.name}
                                    onChange={(e) => onChangeHandler(e)}
                                    className="edit-mode__input" id="name" />}

                            {!editMode
                                ? (profile && profile.lastname)
                                : <input type="text" value={profile && profile.lastname}
                                    onChange={(e) => onChangeHandler(e)}
                                    className="edit-mode__input" id="lastname" />}
                        </div>
                        <div className="profile-info-bio-text">
                            {!editMode
                                ? (profile && profile.bio)
                                : <textarea className="edit-more__textarea"
                                    value={profile.bio}
                                    onChange={(e) => onChangeHandler(e)}
                                    id="bio"
                                    rows={3} />}
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
                { state.post.currentUserPosts.length > 0 && state.post.currentUserPosts.map((post,index) =>
                    <>
                        <img key={index} src={post.image} className="profile-post-single" onClick={() => {
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