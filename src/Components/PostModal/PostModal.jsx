import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostModal.scss";
import "../../Styling/Shapes.scss";
import { Link } from "react-router-dom";
import { BsHeart, BsThreeDots } from "react-icons/bs";
import {
  editCommentAction,
  deleteCommentAction,
} from "../../Actions/commentActions";
import {
  IoBookmarkOutline,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoHappyOutline,
  IoPencil,
  IoTrashBinOutline,
} from "react-icons/io5";
import { GrFormClose } from "react-icons/gr";
import Dropdown from "../Dropdown/Dropdown";
import { deletePostAction } from "../../Actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostCommentsAction,
  writeCommentOnProfileAction,
} from "../../Actions/commentActions";

const PostModal = props => {
  const [showOptions, setOptions] = useState({ options: false });
  const [comments, setComments] = useState();
  const [newComment, setNewComment] = useState();
  const dispatch = useDispatch();
  const getComments = async () => {
    const post_comm = await dispatch(getPostCommentsAction(props.content._id));
    setComments(post_comm.comments);
  };
  const handleChange = e => {
    setNewComment({ text: e.target.value, postId: props.content._id });
    console.log(newComment);
  };
  const submitComment = (event) => {
    if (event.key === "Enter") {
        dispatch(writeCommentOnProfileAction(newComment))
    };
  };
  const [editComment, setEditComment] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [selectedComment, setSelectedComment] = useState()

  const state = useSelector(state => state);
  const currentUser = useSelector(state => state.currentUser?.user?.currentUser);

  const commentId =props.content && props.content.comments;

  console.log("props.content", props.content);

  const handleEdit = async event => {
    setEditComment({ ...editComment, text: event.target.value, _id: selectedComment  });
    console.log("editComment", editComment);
  };

  const submitEditComment = async event => {
    if (event.key === "Enter") {
      await dispatch(editCommentAction(editComment, props.content._id));
      setEditMode(false);
    }
    console.log(event);
  };

  const setEditIndex = (index) =>{
      setEditMode(true)
      setSelectedComment(commentId[index])
  }
  useEffect(() => {
    if (props.content && props.content._id) getComments();
    //console.log(comments)
  }, [props.content]);

  return (
    <>
      <Dropdown
        size="post_options"
        show={showOptions.options}
        content={
          <div className="post-options_wrap">
            <div className="post-option_item">
              <div>Go to post</div>
            </div>
            <div className="dropdown-divider"></div>
            <div className="post-option_item">
              <div>Share to...</div>
            </div>
            <div className="dropdown-divider"></div>
            <div className="post-option_item">
              <Link to="/edit_post">
                <div style={{ color: "black" }}>Edit</div>
              </Link>
            </div>
            <div className="dropdown-divider"></div>
            <div className="post-option_item">
              <div>Embed</div>
            </div>
            <div className="dropdown-divider"></div>
            <div
              className="post-option_item"
              onClick={() => {
                dispatch(deletePostAction(props.content._id));
                props.close(false);
                setOptions({ options: false });
              }}
            >
              <div className="red">Delete</div>
            </div>
            <div className="dropdown-divider"></div>
            <div className="post-option_item" onClick={() => setOptions(false)}>
              <div>Cancel</div>
            </div>
          </div>
        }
      />
      <div className={props.show ? "wrapper-show-post" : "wrapper-hidden-post"}>
        <div className="popup-inner">
          <div className="popup-photo">
            <img
              src={props.content && props.content.image}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="popup-description">
            <div className="popup-description-infos">
              <div className="popup-header">
                <div>
                  <img src="https://picsum.photos/600" className="circle-sm" />
                  <span>
                    {props.content && props.content.authorId.username}
                  </span>
                </div>
                <div>
                  <BsThreeDots
                    className="post-header-options"
                    onClick={() =>
                      setOptions({ options: !showOptions.options })
                    }
                  />
                  <GrFormClose
                    className="post-header-options"
                    onClick={() => props.close(!props.show)}
                  />
                </div>
              </div>
              <div className="popup-caption">
                <img src="https://picsum.photos/600" className="circle-sm" />
                <span>
                  {props.content && props.content.authorId.username}
                </span>{" "}
                <span>{props.content && props.content.caption}</span>
                <div className="popup-caption-date">4 weeks</div>
              </div>
              <div className="popup-comment-wrap">
                {comments && !editMode ? (
                  comments.length > 0 &&
                  comments.map((comment, index) => (
                    <>
                      <div className="popup-comment-single" key={index}>
                        <img
                          src="https://picsum.photos/600"
                          className="circle-sm"
                        />
                        <div className="popup-comment-content">
                          <div>
                            <span>
                              {props.content && props.content.authorId.username}
                            </span>{" "}
                            {comment.text}
                          </div>

                          <div className="popup-comment-time">
                            <span>21 weeks</span>
                          </div>
                        </div>
                      </div>
                      {currentUser.username === comment.author && (
                        <IoPencil onClick={() => setEditIndex(index)} />
                      )}
                      <div>
                        <BsHeart />
                      </div>
                    </>
                  ))
                ) : (
                  <input
                    type="text"
                    id="text"
                    value={editComment && editComment.text}
                    onChange={(event)=> handleEdit(event)}
                    onKeyDown={(event)=>submitEditComment(event)}
                  />
                )}
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div className="popup-interactions">
                <div className="popup-interactions-g1">
                  <IoHeartOutline />
                  <IoChatbubbleOutline />
                  <IoPaperPlaneOutline />
                </div>
                <IoBookmarkOutline />
              </div>
              <div className="popup-like-count">
                <img src="https://picsum.photos/600" />{" "}
                <span>{props.content && props.content.authorId.username}</span>{" "}
                and <span>xx others</span> like this
              </div>
              <div className="popup-time">1 year</div>
              <div className="popup-add-comment">
                <IoHappyOutline />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  onChange={handleChange}
                  onKeyDown={submitComment}
                />
                <input
                  type="button"
                  value="Post"
                  onClick={() => submitComment()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostModal;
