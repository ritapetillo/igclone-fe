import {
  getPostComments,
  newComment,
  editComment,
  deleteComment,
  likeComment,
  unlikeComment,
} from "../Api/commentApi.js";
import {
  COMMENT_FAIL,
  COMMENT_LOADING,
  COMMENT_SUCCESS,
  COMMENT_LIKE_SUCCESS,
} from "./types.js";
