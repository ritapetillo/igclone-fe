import {
  getAllChatRooms,
  getIndividualChatDetails,
  createAChatApi,
} from "../Api/chatApi";
import {
  CHAT_ROOMS_ERROR,
  CHAT_ROOMS_LOADING,
  CHAT_ROOMS_SUCCESS,
  CURRENT_CHAT_ROOM_ERROR,
  CURRENT_CHAT_ROOM_SUCCESS,
} from "./types";

export const getAllUserChats = () => async (dispatch) => {
  try {
    dispatch({
      type: CHAT_ROOMS_LOADING,
    });
    const chats = await getAllChatRooms();
    console.log(chats);
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

export const getCurrentChat = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHAT_ROOMS_LOADING,
    });
    const chat = await getIndividualChatDetails(id);
    console.log(chat);
    if (chat) {
      dispatch({
        type: CURRENT_CHAT_ROOM_SUCCESS,
        payload: chat,
      });
    } else throw Error;
  } catch (err) {
    dispatch({
      type: CURRENT_CHAT_ROOM_ERROR,
    });
  }
};

export const createChat = (users) => async (dispatch) => {
  try {
    dispatch({
      type: CHAT_ROOMS_LOADING,
    });
    const chat = await createAChatApi(users);
    console.log(chat);
    if (chat) {
      dispatch(getAllUserChats());
      return chat;
    } else throw Error;
  } catch (err) {
    dispatch({
      type: CURRENT_CHAT_ROOM_ERROR,
    });
  }
};
