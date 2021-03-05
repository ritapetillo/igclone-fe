import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const getAllChatRooms = async () => {
  try {
    const rooms = await axios.get(`${REACT_APP_API_URI}/api/chat`);
    const chatRooms = await rooms.data;
    console.log(chatRooms);
    return chatRooms;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getIndividualChatDetails = async (roomId) => {
  try {
    const resp = await axios.get(
      `${REACT_APP_API_URI}/api/chat/data/${roomId}`
    );
    const { data } = await resp;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createAChatApi = async (users) => {
  try {
    console.log(users);
    const rooms = await axios.post(`${REACT_APP_API_URI}/api/chat`, { users });
    const chatRooms = await rooms.data;
    console.log(chatRooms);
    return chatRooms;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const unsubscribeFromChatApi = async (id) => {
  try {
    const room = await axios.put(
      `${REACT_APP_API_URI}/api/chat/${id}/unsubscribe`
    );
    console.log(room);
    const chatRoom = await room.data;

    return chatRoom;
  } catch (err) {
    console.log(err);
    return null;
  }
};
