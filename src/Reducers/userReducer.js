import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../Actions/types";
import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../Actions/types";

const initialState = {
  user: {},
  isAuth: false,
  loading: false,
  error_msg: "",
  userRegistration: {},
};

const currentUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
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
    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        user: {},
        error_msg: "Wrong Username and/or Password",
      };

    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userRegistration: payload,
        error_msg: "",
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isAuth: false,
        userRegistration: {},
        error_msg: "Something went wrong",
      };

    default:
      return state;
  }
};

export default currentUserReducer;
