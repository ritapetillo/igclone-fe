import { getAllChatRooms } from "../Api/chatApi";
import {
  CHAT_ROOMS_ERROR,
  CHAT_ROOMS_LOADING,
  CHAT_ROOMS_SUCCESS,
} from "./types";

export const getAllUserChats = () => async (dispatch) => {
  try {
    dispatch({
      type: CHAT_ROOMS_LOADING,
    });
    const chats = await getAllChatRooms();

    if (chats) {
      dispatch({
        type: CHAT_ROOMS_SUCCESS,
        payload: chats,
      });
    } else throw Error;
  } catch (err) {
    dispatch({
      type: CHAT_ROOMS_ERROR,
    });
  }
};
