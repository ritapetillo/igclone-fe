import React, { useState, useEffect, useContext } from "react";
import { followUser, unfollowUser } from "../../Api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingUsersPostsAction } from "../../Actions/postActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostOptionV.scss";
import { socketContext } from "../../Context/SocketContext";

const PostOptionsV = (props) => {
  const dispatch = useDispatch();
  const { socket } = useContext(socketContext);
  const [follow, setFollow] = useState(false);
  const [usersFollow, setUsersFollow] = useState([]);

  const currentUser = useSelector(
    (state) => state.currentUser?.user?.currentUser
  );
  console.log("currentUser", currentUser);

  const postAuthorId = props.post.authorId._id;

  console.log("postAuthor", postAuthorId);

  useEffect(() => {
    isFollow();
    setUsersFollow([...usersFollow, postAuthorId]);
    console.log("usersFollow", usersFollow);
  }, []);

  const isFollow = async () => {
    const follow = currentUser?.following.includes(postAuthorId);
    setFollow(follow);
  };

  const handleFollow = async () => {
    if (follow) {
      await unfollowUser(postAuthorId);
      const newArray = usersFollow.filter((user) => user !== postAuthorId);
      setUsersFollow(newArray);
      dispatch(getFollowingUsersPostsAction());
    } else {
      await followUser(postAuthorId);
      socket.emit("follow", { userId: postAuthorId });
      setUsersFollow([...usersFollow, postAuthorId]);
      dispatch(getFollowingUsersPostsAction());
    }
    setFollow(!follow);
  };

  return (
    <div
      className={props.show ? "wrapper-show" : "wrapper-hidden"}
      onClick={() => props.close(!props.show)}
    >
      <div className="popup-inner">
        <div className="option-wrap">
          <div className="option red">Report</div>
        </div>
        <div className="divider"></div>
        <div className="option-wrap" onClick={() => handleFollow()}>
          <div className="option red">{isFollow ? "Unfollow" : "Follow"}</div>
        </div>
        <div className="divider"></div>
        <div className="option-wrap">
          <div className="option">Go to post</div>
        </div>
        <div className="divider"></div>
        <div className="option-wrap">
          <div className="option">Share to...</div>
        </div>
        <div className="divider"></div>
        <div className="option-wrap">
          <div className="option">Copy link</div>
        </div>
        <div className="divider"></div>
        <div className="option-wrap">
          <div className="option">Embed</div>
        </div>
        <div className="divider"></div>
        <div className="option-wrap">
          <div className="option">Cancel</div>
        </div>
      </div>
    </div>
  );
};

export default PostOptionsV;
