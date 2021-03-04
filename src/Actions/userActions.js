import { getCurrentUserApi, userLoginApi } from "../Api/authApi.js";
import {editProfile, deleteProfile} from "../Api/userApi.js";
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, PROFILE_LOADING, PROFILE_SUCCESS, PROFILE_ERROR } from "./types.js";

export const loginAction = (credentials = "") => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });
    //if there are credentials (which means we are logging in with email and pass)
    if (credentials) {
      const login = await userLoginApi(credentials);
      console.log(login);
      if (login) {
        const currentUser = await getCurrentUserApi();
        dispatch({
          type: LOGIN_SUCCESS,
          payload: currentUser,
        });
      } else throw Error;
    }
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

export const editProfileAction = (data) => async dispatch => {
  try {
    dispatch({
      type: PROFILE_LOADING,
    });
    const profile = await editProfile(data);
    if (profile) {
      dispatch({
        type: PROFILE_SUCCESS,
        payload: profile,
      });
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const deleteProfileAction = () => async dispatch => {
  try {
    dispatch({
      type: PROFILE_LOADING,
    });
    const profile = await deleteProfile();
    if (profile.status) {
      dispatch({
        type: PROFILE_SUCCESS,
        payload: profile,
      });
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        error_msg: "There was a problem deleting this profile",
      },
    });
  }
};