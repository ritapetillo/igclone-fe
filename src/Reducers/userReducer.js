import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, PROFILE_ERROR, PROFILE_LOADING, PROFILE_SUCCESS  } from "../Actions/types";

const initialState = {
  user: {},
  isAuth: false,
  loading: false,
  error_msg: "",
};

const currentUserReducer = (state = initialState, { type, payload }) => {
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
    default:
      return state;
  }
};

export default currentUserReducer;
