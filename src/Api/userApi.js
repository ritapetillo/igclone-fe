import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const registerUser = async () => {
    try {
      const user = await axios.post(`${REACT_APP_API_URI}/api/users/register`, {
        withCredentials: true,
      });
      return user.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  
  
export const fetchAllUsers = async () => {
  try {
    const users = await axios.get(`${REACT_APP_API_URI}/api/users`, {
      withCredentials: true,
    });
    return users.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};


export const fetchByUsername = async username => {
  try {
    const user = await axios.get(`${REACT_APP_API_URI}/api/users/${username}`, {
      withCredentials: true,
    });
    return user.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const followUser = async userId => {
  try {
    const user = await axios.post(
      `${REACT_APP_API_URI}/api/users/follow/${userId}`,
      {
        withCredentials: true,
      }
    );
    return user.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const unfollowUser = async userId => {
  try {
    const user = await axios.put(
      `${REACT_APP_API_URI}/api/users/unfollow/${userId}`,
      {
        withCredentials: true,
      }
    );
    return user.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
