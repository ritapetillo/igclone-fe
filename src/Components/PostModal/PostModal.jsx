import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

import "./PostModal.scss";
import "../../Styling/Shapes.scss";
import { Link } from "react-router-dom";
import { BsHeart, BsThreeDots } from "react-icons/bs";
import {
  IoBookmarkOutline,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoHappyOutline,
} from "react-icons/io5";
import { GrFormClose } from "react-icons/gr";
import Dropdown from "../Dropdown/Dropdown";
import { deletePostAction } from "../../Actions/postActions";

const PostModal = props => {
  const [showOptions, setOptions] = useState({ options: false });
  const currentUserPost = useSelector(state => state.post.currentUserPosts.authorId);
  const anotherUserPost = useSelector(state => state.post.userPosts.authorId);

  const dispatch = useDispatch();
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
                  <span>{props.content && props.content.authorId}</span>
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
                <span>{props.content && props.content.authorId}</span>{" "}
                <span>{props.content && props.content.caption}</span>
                <div className="popup-caption-date">4 weeks</div>
              </div>
              <div className="popup-comment-wrap">
                {props.content &&
                  props.content.comments.map(comment => (
                    <div className="popup-comment-single">
                      <img
                        src="https://picsum.photos/600"
                        className="circle-sm"
                      />
                      <div className="popup-comment-content">
                        <div>
                          <span>{props.content && props.content.authorId}</span>{" "}
                          {comment}
                        </div>
                        <div className="popup-comment-time">
                          <span>21 weeks</span>
                        </div>
                      </div>
                      <BsHeart />
                    </div>
                  ))}
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
                <span>{props.content && props.content.authorId}</span> and{" "}
                <span>xx others</span> like this
              </div>
              <div className="popup-time">1 year</div>
              <div className="popup-add-comment">
                <IoHappyOutline />
                <input type="text" placeholder="Add a comment..." />
                <input type="button" value="Post" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostModal;
