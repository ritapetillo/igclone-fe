import {
  CHAT_ROOMS_ERROR,
  CHAT_ROOMS_LOADING,
  CHAT_ROOMS_SUCCESS,
  CURRENT_CHAT_ROOM_SUCCESS,
  CURRENT_CHAT_ROOM_ERROR,
} from "../Actions/types";

const initialState = {
  rooms: [],
  current_room: {},
  error_msg: "",
  loading: false,
};

const chatReduer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHAT_ROOMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHAT_ROOMS_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: payload.chats,
        error_msg: "",
      };
    case CHAT_ROOMS_ERROR:
      return {
        ...state,
        loading: false,
        error_msg: "No conversations available",
        rooms: [],
      };
    case CURRENT_CHAT_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        current_room: payload.chatRoom,
        error_msg: "",
      };
    case CURRENT_CHAT_ROOM_ERROR:
      return {
        ...state,
        loading: false,
        current_room: {},
        error_msg: "No conversations available",
      };
    default:
      return state;
  }
};

export default chatReduer;
