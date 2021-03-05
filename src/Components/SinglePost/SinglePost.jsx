import React, { useState, useEffect, useRef } from "react";
import "./SinglePost.scss";
import "../../Styling/Shapes.scss";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
//ICONS
import { BsThreeDots, BsPersonFill } from "react-icons/bs";
import {
  IoBookmarkOutline,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoHeartSharp,
  IoBookmark,
  IoHappyOutline,
} from "react-icons/io5";
import PostOptionsV from "../PostOptions-V/PostOptionV";
import PostOptionsO from "../PostOptions-O/PostOptionO";
import { likeAPost, unlikeAPost } from "../../Api/postApi";
import{writeCommentOnFeedsAction} from "../../Actions/commentActions";



const SinglePost = ({ post }) => {
  const dispatch = useDispatch()
  const [user, setUser] = useState();
  const [show_more, setShow] = useState(false);
  const [showPopup, setPopup] = useState(false);
  const [saved, setSaved] = useState(false);
  const [like, setLike] = useState(false);
  const [togglePostLike, setPostToggleLike] = useState(false);
  const [username, setUsername] = useState("");
  const [displayComment, setDisplayComments] = useState(false);
  const [usersLiked, setUsersLiked] = useState([]);
  const [writtenComment, setWrittenComment] = useState([])

  const comment=useRef()

  const currentUser = useSelector(
    (state) => state.currentUser?.user.currentUser
  );
  const postId = post._id;

  useEffect(() => {
    isLiked();
    setUsersLiked(post.likes);
    console.log(usersLiked);
  }, []);


  const isLiked = async () => {
    const like = post.likes.includes(currentUser.username);
    setLike(like);
  };

  const handlePostLike = async () => {
    if (like) {
      await unlikeAPost(post._id);
      const newArray = usersLiked.filter(
        (user) => user !== currentUser.username
      );
      setUsersLiked(newArray);
    } else {
      await likeAPost(post._id);
      setUsersLiked([...usersLiked, currentUser.username]);
    }
    setLike(!like);
  };


const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      const writtenComment = {
          text: comment.current.value,
          postId: postId
      }
      console.log("writtenComment", writtenComment)
      dispatch(writeCommentOnFeedsAction(postId, comment.current.value))    }
  }

  const handleChange= async (event) => {
    setWrittenComment({text: comment.current.value,});
  }
  return (
    <>
      <PostOptionsV post={post} show={showPopup} close={setPopup} />{" "}
      {/*this needs to be moved in the homepage*/}
      {/*IF user is the owner of the post, use <PostOptionsO/> instead */}
      <div className="post-wrap">
        {/*---------------------POST HEADER---------------------*/}
        <div className="post-header">
          <div className="post-header-info">
            <div className="story-sm">
              {post && post.authorId?.imageUrl ? (
                <img src={post.authorId.imageUrl} className="circle-sm" />
              ) : (
                <img src="https://i.pravatar.cc/150" className="circle-sm" />
              )}
            </div>
            <div className="username">
              {/*<Link to={`/${user._id}`}>*/}
              {post ? post.authorId?.username : "username"}
              {/*</Link>*/}
            </div>
          </div>
          <BsThreeDots
            className="post-header-options"
            onClick={() => setPopup(true)}
          />
        </div>
        {/*---------------------POST IMAGE---------------------*/}
        <div className="post-image-wrap">
          {post && post.image ? (
            <img src={post.image} className="post-image" />
          ) : (
            <img src="https://picsum.photos/600" className="post-image" />
          )}
          {<BsPersonFill className="post-image-tagged-icon" />}
        </div>
        {/*---------------------POST INTERACTIONS---------------------*/}
        <div className="post-interactions">
          <div className="like-comment-send">
            {!like ? (
              <IoHeartOutline
                className="interaction-icon"
                onClick={() => handlePostLike()}
              />
            ) : (
              <IoHeartSharp
                className="interaction-icon"
                onClick={() => handlePostLike()}
              />
            )}
            <IoChatbubbleOutline className="interaction-icon" />
            <IoPaperPlaneOutline className="interaction-icon" />
          </div>
          <div className="save-icon">
            {!saved ? (
              <IoBookmarkOutline
                className="interaction-icon"
                onClick={() => setSaved(!saved)}
              />
            ) : (
              <IoBookmark
                className="interaction-icon"
                onClick={() => setSaved(!saved)}
              />
            )}
          </div>
        </div>
        {/*---------------------POST LIKES---------------------*/}
        <div className="post-likes">
          <img src="https://i.pravatar.cc/150" className="xs-img" />
          <div className="">
            Liked by{" "}
            <span className="user-who-liked">
              {usersLiked && usersLiked.map((user) => user)}
            </span>{" "}
            and others
          </div>
        </div>
        <div className="post-caption">
          <div className={show_more ? "caption-whole" : "caption-cut"}>
            <span className="post-author">{post.authorId?.username}</span>{" "}
            {post.caption}
          </div>
          {!show_more && (
            <div className="show-more" onClick={() => setShow(true)}>
              ... more
            </div>
          )}
          {show_more && (
            <div className="show-more" onClick={() => setShow(false)}>
              ... less
            </div>
          )}
        </div>
        {/*---------------------POST COMMENTS---------------------*/}
        <div className="post-comments">
          <div className="view-comments">View all comments</div>
          {post.comments &&
            post.comments.map((comment) => <Comment comment={comment} />)}
        </div>
        <div className="post-time">1 hour ago</div>
        <div className="divider"></div>
        {/*---------------------ADD COMMENT---------------------*/}
        <div className="post-add-comment">
          <IoHappyOutline className="add-emoji" />
           <input 
           className="comment-input"
           type="text"
           placeholder='Leave a comment'
           onKeyDown={handleKeyDown} 
           ref={comment}
           onChange={handleChange}/>
          <div className="add-comment-button">Post</div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
