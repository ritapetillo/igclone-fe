import React, { useEffect, useState } from "react";
import { IoHeartOutline, IoHeartSharp, IoPencil } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { likeAComment, unlikeAComment } from "../../Api/commentApi";
import {editCommentAction} from "../../Actions/commentActions"
const Comment = ({ comment, postId }) => {
  const [liked, setLiked] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const currentUser = useSelector(state => state.currentUser.user.currentUser);
const dispatch = useDispatch();
  // const comment = useRef();

  const handleEdit = async event => {
    const editedComment = {
      text: event.target.value,
      postId: postId,
    };
    if (event.key === "Enter") {
      console.log("editedComment", editedComment);
      dispatch(editCommentAction(editedComment, postId));
    }
    setEditMode(false);
  };
  useEffect(() => {
    // when the component mounts, you want to check if the current user is within the array of liked from the comment
    //if that's the case, it means that current user liked that comment
    //then we want to set liked to true
    setLiked(comment.likes.includes(currentUser.username));
  }, []);

  const handleLike = async () => {
    //we send the request to the backed. If the status is liked, we will dislike the comment and viceversa
    //we will use the state of like to understand which API request we need to make.
    if (!liked) await likeAComment(comment._id);
    else await unlikeAComment(comment._id);
    setLiked(!liked);
  };
  return (
    <div className="single-comment">
      {!editMode ? (
        <>
        <div className="comment-infos">
          <div className="comment-author">{comment.author}</div>
          <div className="comment-text">{comment.text}</div>
        </div>
        <IoPencil onCLick ={()=>setEditMode(true)} />
        </>
      ) : (
        <input type="text" id="text" value={comment.text} />
      )}
      {!liked ? (
        <IoHeartOutline
          className="comment-add-like"
          onClick={() => handleLike()}
        />
      ) : (
        <IoHeartSharp
          className="comment-add-like"
          onClick={() => handleLike()}
        />
      )}
    </div>
  );
};

export default Comment;
