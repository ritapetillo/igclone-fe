import { combineReducers } from "redux";
import userReducer from "./userReducer";
import chatReducer from "./chatReducer";
import postReducer from "./postReducer";


export default combineReducers({
  user: userReducer,
  chat: chatReducer,
  post: postReducer
});
