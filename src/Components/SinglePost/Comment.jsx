import React, { useEffect, useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { likeAComment, unlikeAComment } from "../../Api/commentApi";

const Comment = ({ comment }) => {
  const [liked, setLiked] = useState(false);
  const currentUser = useSelector(
    (state) => state.currentUser.user.currentUser
  );
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
      <div className="comment-infos">
        <div className="comment-author">{comment.author}</div>
        <div className="comment-text">{comment.text}</div>
      </div>

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
