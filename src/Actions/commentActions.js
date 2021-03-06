import {
  getPostComments,
  newComment,
  editComment,
  deleteComment,
} from "../Api/commentApi.js";

import {getPostsFromCurrentUser, getPostsFromFollowers} from "../Api/postApi.js";
import { COMMENT_ERROR, COMMENT_LOADING, COMMENT_SUCCESS } from "./types.js";


export const getPostCommentsAction = (data) => async dispatch => {

  try {
    dispatch({
      type: COMMENT_LOADING,
    });
    const postComments = await getPostComments(data);
    if (postComments) {
      dispatch({
        type: COMMENT_SUCCESS,
        payload: postComments,
      });
      return postComments
    } else throw Error;
  } catch (error) {
    dispatch({
      type: COMMENT_ERROR,
      payload: {
        error_msg: "No comments for this post",
      },
    });
  }
};

export const writeCommentOnFeedsAction = (data) => async dispatch => {
  try {
    dispatch({
      type: COMMENT_LOADING,
    });
    const comment = await newComment(data);
    console.log("commentXXXX", comment)
    if (comment) {
      dispatch(getPostsFromFollowers(getPostComments(data.postId)));
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: COMMENT_ERROR,
      payload: {
        error_msg: "Error posting this comment",
      },
    });
  }
};

export const writeCommentOnProfileAction = (data) => async dispatch => {
  try {
    dispatch({
      type: COMMENT_LOADING,
    });
    const comment = await newComment(data);
    if (comment) {
      dispatch(getPostsFromCurrentUser(getPostComments(data.postId)));
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: COMMENT_ERROR,
      payload: {
        error_msg: "Error posting this comment",
      },
    });
  }
};


export const editCommentAction = (data, postId) => async dispatch => {
  try {
    dispatch({
      type: COMMENT_LOADING,
    });
    const comment = await editComment(data, postId);
    if (comment) {
      dispatch(getPostComments(postId));
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: COMMENT_ERROR,
      payload: {
        error_msg: "Error editing this comment",
      },
    });
  }
};

export const deleteCommentAction = (data, postId) => async dispatch => {
  try {
    dispatch({
      type: COMMENT_LOADING,
    });
    const comment = await deleteComment(data, postId);
    if (comment) {
      dispatch(getPostComments(postId));
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: COMMENT_ERROR,
      payload: {
        error_msg: "Error deleting this comment",
      },
    });
  }
};

