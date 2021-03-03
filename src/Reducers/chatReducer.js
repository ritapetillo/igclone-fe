import {
  CHAT_ROOMS_ERROR,
  CHAT_ROOMS_LOADING,
  CHAT_ROOMS_SUCCESS,
} from "../Actions/types";

const initialState = {
  rooms: [],
  error_msg: "",
  loading: false,
};

const chatReduer = (state = initialState, { type, payload }) => {
  console.log(payload);
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
        error_msg: "No conversations avaialble",
      };
    default:
      return state;
  }
};

export default chatReduer;
