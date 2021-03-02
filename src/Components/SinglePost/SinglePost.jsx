import React, { useState } from "react"
import "./SinglePost.scss"
import "../../Styling/Shapes.scss"
//ICONS
import { BsThreeDots, BsPersonFill } from "react-icons/bs"
import { 
    IoBookmarkOutline, 
    IoChatbubbleOutline, 
    IoHeartOutline, 
    IoPaperPlaneOutline,
    IoHeartSharp,
    IoBookmark,
    IoHappyOutline } from "react-icons/io5"

const SinglePost = () => {
    const [user, setUser] = useState()
    const [show_more, setShow] = useState(false)
    return (<div className='post-wrap'>
        {/*---------------------POST HEADER---------------------*/}
        <div className='post-header'>
            <div className="post-header-info">
                <div className="story-sm">
                    <img src="https://i.pravatar.cc/150" className="circle-sm" />
                </div>
                <div className="username">
                    {/*<Link to={`/${user._id}`}>*/}
                    {user ? user.username : "username"}
                    {/*</Link>*/}
                </div>

            </div>
            <BsThreeDots className="post-header-options" />
            {/*NEEDS ADDING A MODAL FOR OPTIONS*/}
        </div>
        {/*---------------------POST IMAGE---------------------*/}
        <div className="post-image-wrap">
            <img src="https://picsum.photos/600" className="post-image" />
            {<BsPersonFill className="post-image-tagged-icon" />}
        </div>
        {/*---------------------POST INTERACTIONS---------------------*/}
        <div className='post-interactions'>
            <div className="like-comment-send">
                <IoHeartOutline className="interaction-icon" />
                <IoChatbubbleOutline className="interaction-icon" />
                <IoPaperPlaneOutline className="interaction-icon" />
            </div>
            <div className="save-icon">
                <IoBookmarkOutline className="interaction-icon" />
            </div>
        </div>
        {/*---------------------POST LIKES---------------------*/}
        <div className='post-likes'>
            <img src="https://i.pravatar.cc/150" className="xs-img" />
            <div className="">Liked by <span className="user-who-liked">*username*</span> and others</div>
        </div>
        <div className='post-caption'>
            <div className={show_more ? "caption-whole" : "caption-cut"}>
                <span className="post-author" >*username*</span > This is a really long caption. I used a lot of energy to write this.
            After about 4 lines, this should be hidden. I wonder how I could do this.
            I guess the same way I would do an ellipsis.
            Just need some more text to work out the dimension I am looking for...
            And there we go.
            Just one more line right here. Just a little bit more. Now you see me... Now you don't! :P
            </div>
            {!show_more && <div className="show-more" onClick={() => setShow(true)}>... more</div>}
            {show_more && <div className="show-more" onClick={() => setShow(false)}>... less</div>}
        </div>
        {/*---------------------POST COMMENTS---------------------*/}
        <div className='post-comments'>
            <div className="view-comments">View all comments</div>
            <div className="single-comment">
                <div className="comment-infos">
                    <div className="comment-author"><strong>*username*</strong></div>
                    <div className="comment-text">This is a comment. I cannot believe this is a real comment. </div>
                </div>
                <IoHeartOutline className="comment-add-like"/>

            </div>
        </div>
        <div className='post-time'>
            1 hour ago
        </div>
        <div className="divider"></div>
        <div className='post-add-comment'>
            <IoHappyOutline className="add-emoji"/>
            <input className="comment-input" placeholder="Add a comment"/>
            <div className="add-comment-button">Post</div>
        </div>
    </div>)
}

export default SinglePost