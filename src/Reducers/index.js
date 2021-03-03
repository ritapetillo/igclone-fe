import { combineReducers } from "redux";
import currentUserReducer from "./userReducer";
import chatReducer from "./chatReducer";
import postReducer from "./postReducer";


export default combineReducers({
  currentUser: currentUserReducer,
  chat: chatReducer,
  post: postReducer
});
