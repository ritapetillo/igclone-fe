import { LOGIN_LOADING } from "../Actions/types";

const initialState = {
  user: {},
  isAuth: false,
  loading: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
