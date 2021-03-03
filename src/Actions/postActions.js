import {
  getPostsFromFollowers,
  getPostsFromUser,
  makeNewPost,
  editMyPost,
  deleteMyPost,
  likePost,
  unlikePost,
  getPostsFromCurrentUser,
} from "../Api/postApi.js";
import {
  POST_LOADING,
  CURRENT_USER_POSTS_SUCCESS,
  POST_LIKE_SUCCESS,
  POST_ERROR,
  FOLLOWING_USERS_POSTS_SUCCESS,
} from "./types.js";
// my post actions will be: creating, editing, deleting, getting, liking (not unliking)
//

//CURRENT USER POSTS
export const getCurrentUserPostsAction = () => async (dispatch) => {
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

export const createPostAction = () => async (dispatch) => {
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
        error_msg: "There was a problem posting",
      },
    });
  }
};

export const editPostAction = () => async (dispatch) => {
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

export const deletePostAction = () => async (dispatch) => {
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

// export const likePostAction = (post-id) => {
//   try {
  
//     const post = await likePost();
//     if (post) {
      
//     } else throw new Error();
//   } catch (error) {
//     dispatch({
//       type: POST_FAIL,
//     });
//   }
// };

//FOLLOWING USERS POSTS
export const getFollowingUsersPostsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LOADING,
    });
    const followingUserPosts = await getPostsFromFollowers();
    if (followingUserPosts) {
      dispatch({
        type: FOLLOWING_USERS_POSTS_SUCCESS,
        payload: followingUserPosts,
      });
    } else throw Error;
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error_msg: "There are no posts from your followings",
        typePost: "followingUsersPosts",
      },
    });
  }
};
