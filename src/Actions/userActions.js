import { getCurrentUserApi, userLoginApi } from "../Api/authApi.js";
<<<<<<< Updated upstream
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "./types.js";
=======
import {
  editProfile,
  deleteProfile,
  uploadProfilePicture,
  fetchByUsername,
} from "../Api/userApi.js";
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
  PROFILE_ERROR,
  SELECTED_USER_ERROR,
  SELECTED_USER_LOADING,
  SELECTED_USER_SUCCESS,
} from "./types.js";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======

export const editProfileAction = (data) => async (dispatch) => {
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

export const deleteProfileAction = () => async (dispatch) => {
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

export const changeProfilePictureAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: PROFILE_LOADING,
    });
    const picture = await uploadProfilePicture(data);
    if (picture) {
      dispatch({
        type: PROFILE_SUCCESS,
        payload: picture,
      });
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        error_msg: "There was a problem updating your profile picture",
      },
    });
  }
};

export const getSelectedUserProfile = (username) => async (dispatch) => {
  try {
    console.log("sfsd");
    dispatch({
      type: SELECTED_USER_LOADING,
    });
    //if there are credentials (which means we are logging in with email and pass)

    const selectedUser = await fetchByUsername(username);
    if (selectedUser)
      dispatch({
        type: SELECTED_USER_SUCCESS,
        payload: selectedUser,
      });
    else throw Error;
    //after producing tokens, get currentuser
  } catch (err) {
    dispatch({
      type: SELECTED_USER_ERROR,
    });
  }
};
>>>>>>> Stashed changes
