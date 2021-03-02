import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../Actions/types";

const initialState = {
  user: {},
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
    default:
      return state;
  }
};

export default userReducer;
