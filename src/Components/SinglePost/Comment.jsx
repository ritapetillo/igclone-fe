import React, { useEffect, useState } from "react";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoPencil,
  IoTrashBinOutline,
} from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { likeAComment, unlikeAComment } from "../../Api/commentApi";
import {
  editCommentAction,
  deleteCommentAction,
} from "../../Actions/commentActions";
const Comment = ({ comment, postId }) => {
  const [liked, setLiked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editComment, setEditComment] = useState("");

  const currentUser = useSelector(state => state.currentUser.user.currentUser);
  const dispatch = useDispatch();
  // const comment = useRef();

  const handleEdit = async event => {
    setEditComment({ ...editComment, text: event.target.value });
    console.log("editComment", editComment);
  };

  const submitEditComment = async event => {
    if (event.key === "Enter") {
      await dispatch(editCommentAction(editComment, postId));
      setEditMode(false);
    }
    console.log(event);
  };

  useEffect(() => {
    // when the component mounts, you want to check if the current user is within the array of liked from the comment
    //if that's the case, it means that current user liked that comment
    //then we want to set liked to true
    setLiked(comment.likes.includes(currentUser.username));
    setEditComment(comment);
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
          {currentUser.username === editComment.author && (
            <IoPencil onClick={() => setEditMode(true)} />
          )}
          {currentUser.username === editComment.author && (
            <IoTrashBinOutline
              onClick={() => dispatch(deleteCommentAction(comment, postId))}
            />
          )}
        </>
      ) : (
        <input
          type="text"
          id="text"
          value={editComment && editComment.text}
          onChange={handleEdit}
          onKeyDown={submitEditComment}
        />
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
