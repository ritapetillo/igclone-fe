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
