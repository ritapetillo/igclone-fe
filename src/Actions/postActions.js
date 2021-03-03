import {
  getPostsFromFollowers,
  getPostsFromUser,
  makeNewPost,
  editMyPost,
  deleteMyPost,
  getPostsFromCurrentUser,
} from "../Api/postApi.js";
import {
  POST_LOADING,
  CURRENT_USER_POSTS_SUCCESS,
  FOLLOWING_USERS_POSTS_SUCCESS,
A_USERS_POSTS_SUCCESS,
  POST_ERROR,
} from "./types.js";

// we are reusing the loading & error types. In the error, we are 
// identify what the type of the post should be, and in the postReducer 
//identify the type here in the actions & the error message

//CURRENT USER POSTS
export const getCurrentUserPostsAction = () => async dispatch => {
  try {
    dispatch({
      type: POST_LOADING,
    });
    const userPosts = await getPostsFromCurrentUser();
    if (userPosts) {
      dispatch({
        type: CURRENT_USER_POSTS_SUCCESS,
        payload: userPosts,
      });
    } else throw Error;
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error_msg: "There are no posts for this user",
        typePost: "currentUserPosts",
      },
    });
  }
};

export const createPostAction = () => async dispatch => {
  try {
    dispatch({
      type: POST_LOADING,
    });
    const post = await makeNewPost();
    if (post) {
      dispatch(getCurrentUserPostsAction());
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error_msg: "There was a problem creating this post",
        typePost: "currentUserPosts",
      },
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
      dispatch(getCurrentUserPostsAction());
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error_msg: "There was a problem editing this post",
        typePost: "currentUserPosts",
      },
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
      dispatch(getCurrentUserPostsAction());
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      error_msg: "There was a problem deleting this post",
      typePost: "currentUserPosts",
    });
  }
};

//FOLLOWING USERS POSTS
export const getFollowingUsersPostsAction = () => async dispatch => {
  try {
    dispatch({
      type: POST_LOADING,
    });
    const posts = await getPostsFromFollowers();
    if (posts) {
      dispatch({
        type: FOLLOWING_USERS_POSTS_SUCCESS,
        payload: posts,
      });
    } else throw Error;
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error_msg: "There are no posts from those you follow",
        typePost: "followingUsersPosts",
      },
    });
  }
};

//ALL OF A USER's POSTS
export const getUsersPostAction = () => async dispatch => {
  try {
    dispatch({
      type: POST_LOADING,
    });
    const posts = await getPostsFromUser();
    if (posts) {
      dispatch({
        type: A_USERS_POSTS_SUCCESS,
        payload: posts,
      });
    } else throw Error;
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error_msg: "No posts from this user",
        typePost: "userPosts",
      },
    });
  }
};
