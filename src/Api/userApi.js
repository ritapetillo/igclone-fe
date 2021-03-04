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

export const fetchByUsername = async (username) => {
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
export const searchUser = async (query) => {
  try {
    const user = await axios.get(
      `${REACT_APP_API_URI}/api/users/search?q=${query}`,
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

export const followUser = async (userId) => {
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


export const unfollowUser = async (userId) => {
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


export const editProfile = async (data) => {
  try {
    const user = await axios.put(`${REACT_APP_API_URI}/api/users/me`,data, {
      withCredentials: true,
    });
    return user.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteProfile = async () => {
  try {
    const post = await axios.delete(`${REACT_APP_API_URI}/api/users/me`, {
      withCredentials: true,
    });
    return post.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
