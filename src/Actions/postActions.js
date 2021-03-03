import {
  getPostsFromFollowers,
  getPostsFromUser,
  makeNewPost,
  editMyPost,
  deleteMyPost,
  likePost,
  unlikePost,
} from "../Api/postApi.js";
import {
  POST_FAIL,
  POST_LOADING,
  POST_SUCCESS,
  POST_LIKE_SUCCESS,
} from "./types.js";
// my post actions will be: creating, editing, deleting, getting, liking (not unliking)

export const createPostAction = () => async dispatch => {
  try {
    dispatch({
      type: POST_LOADING,
    });
    const post = await makeNewPost();
    if (post) {
      dispatch({
        type: POST_SUCCESS,
        payload: post,
      });
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: POST_FAIL,
    });
  }
};

export const editPostAction = () => async dispatch => {
  try {
    dispatch({
      type: POST_LOADING,
    });
    const post = await editMyPost();
    if (post) {
      dispatch({
        type: POST_SUCCESS,
        payload: post,
      });
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: POST_FAIL,
    });
  }
};

export const deletePostAction = () => async dispatch => {
  try {
    dispatch({
      type: POST_LOADING,
    });
    const post = await deleteMyPost();
    if (post) {
      dispatch({
        type: POST_SUCCESS,
        payload: post,
      });
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: POST_FAIL,
    });
  }
};

export const likePostAction = () => async dispatch => {
  try {
    dispatch({
      type: POST_LOADING,
    });
    const post = await likePost();
    if (post) {
      dispatch({
        type: POST_LIKE_SUCCESS,
        payload: post,
      });
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: POST_FAIL,
    });
  }
};
