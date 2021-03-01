import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "./types.js";

export const loginAction = () => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
};
