import {
  POST_ERROR,
  POST_LOADING,
  CURRENT_USER_POSTS_SUCCESS,
  FOLLOWING_USERS_POSTS_SUCCESS,
  COMMENT_ERROR,
  COMMENT_LOADING,
} from "../Actions/types";

const initialState = {
  currentUserPosts: [],
  followingUsersPosts: [],
  userPosts: [],
  loading: false,
  error_msg: "",
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CURRENT_USER_POSTS_SUCCESS:
      return {
        ...state,
        currentUserPosts: payload,
        error_msg: "",
      };
    case FOLLOWING_USERS_POSTS_SUCCESS:
      return {
        ...state,
        followingUsersPosts: payload,
        error_msg: "",
      };
    case ALL_USERS_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: payload,
        error_msg: "",
      };

    case POST_ERROR:
      if (payload.typePost) {
        return {
          ...state,
          [payload.typePost]: [],
          error_msg: payload.error_msg,
        };
      } else {
        return {
          ...state,
          error_msg: payload.error_msg,
        };
      }
    case COMMENT_ERROR:
      return {
        ...state,
        error_msg: payload.error_msg,
      };

    default:
      return state;
  }
};

export default postReducer;
