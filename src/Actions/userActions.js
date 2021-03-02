import { getCurrentUserApi, userLoginApi } from "../Api/authApi.js";
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "./types.js";

export const loginAction = (credentials = "") => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });
    //if there are credentials (which means we are logging in with email and pass)
    if (credentials) await userLoginApi(credentials);
    //after producing tokens, get currentuser
    const currentUser = await getCurrentUserApi();
    if (!currentUser) throw Error;
    else
      dispatch({
        type: LOGIN_SUCCESS,
        payload: currentUser,
      });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
