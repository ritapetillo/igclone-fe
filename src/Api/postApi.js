import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const getPostsFromFollowers = async () => {
  try {
    const posts = await axios.get(`${REACT_APP_API_URI}/api/post`, {
      withCredentials: true,
    });
    return posts.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPostsFromUser = async (username) => {
  try {
    const posts = await axios.get(
      `${REACT_APP_API_URI}/api/post/user/all/${username}`,

      {
        withCredentials: true,
      }
    );
    return posts.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPostsFromCurrentUser = async () => {
  try {
    const posts = await axios.get(
      `${REACT_APP_API_URI}/api/post/me`,

      {
        withCredentials: true,
      }
    );
    return posts.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const makeNewPost = async (formData) => {
  try {
    const post = await axios.post(
      `${REACT_APP_API_URI}/api/post/upload`,
      formData,
      {
        withCredentials: true,
      }
    );
    return post.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const editMyPost = async (data, postId) => {
  try {
    const post = await axios.put(`${REACT_APP_API_URI}/api/post/${postId}`,
    data,
    {
      withCredentials: true,
    });
    return post.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteMyPost = async (postID) => {
  try {
    const post = await axios.delete(`${REACT_APP_API_URI}/api/post/${postID}`, {
      withCredentials: true,
    });
    return post.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const likeAPost = async (postID) => {
  try {
    const post = await axios.post(
      `${REACT_APP_API_URI}/api/post/${postID}/like`,
      {
        withCredentials: true,
      }
    );
    return post.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const unlikeAPost = async (postID) => {
  try {
    const post = await axios.put(
      `${REACT_APP_API_URI}/api/post/${postID}/unlike`,
      {
        withCredentials: true,
      }
    );
    return post.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
