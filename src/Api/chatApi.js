import axios from "./authAxios";
const { REACT_APP_API_URI } = process.env;

export const getAllChatRooms = async () => {
  try {
    const rooms = await axios.get(`${REACT_APP_API_URI}/api/chat`);
    const chatRooms = await rooms.data;
    return chatRooms;
  } catch (err) {
    console.log(err);
    return null;
  }
};
