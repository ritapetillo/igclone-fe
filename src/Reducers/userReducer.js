import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  PROFILE_ERROR,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
  SELECTED_USER_LOADING,
  SELECTED_USER_SUCCESS,
  SELECTED_USER_ERROR,
} from "../Actions/types";

const initialState = {
  user: {},
  selectedUser: {},
  isAuth: false,
  loading: false,
  error_msg: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: payload,
        error_msg: "",
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: payload,
        error_msg: "",
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error_msg: "Error with editing/deleting profile",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        user: {},
        error_msg: "Wrong Username and/or Password",
      };
    case SELECTED_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SELECTED_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedUser: payload,
        error_msg: "",
      };
    case SELECTED_USER_ERROR:
      return {
        ...state,
        loading: false,
        selectedUser: {},
        error_msg: "Profile not existing",
      };
    default:
      return state;
  }
};

export default userReducer;
