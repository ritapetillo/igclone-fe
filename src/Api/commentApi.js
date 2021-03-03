import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const getPostComments = async postID => {
  try {
    const comments = await axios.get(
      `${REACT_APP_API_URI}/api/post/comments/${postID}`,
      {
        withCredentials: true,
      }
    );
    return comments.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const newComment = async postId => {
    try {
      const comment = await axios.post(
        `${REACT_APP_API_URI}/api/post/comments/${postId}`,
        {
          withCredentials: true,
        }
      );
      return comment.data;
    } catch (error) {
      console.log(err);
      return null;
    }
  };

export const editComment = async commentId => {
  try {
    const comment = await axios.put(
      `${REACT_APP_API_URI}/api/post/comments/${commentId}`,
      {
        withCredentials: true,
      }
    );
    return comment.data;
  } catch (error) {
    console.log(err);
    return null;
  }
};

export const deleteComment = async (postId, commentId) => {
  try {
    const comment = await axios.delete(
      `${REACT_APP_API_URI}/api/post/comments/${postId}/${commentId}`,
      {
        withCredentials: true,
      }
    );
    return comment.data;
  } catch (error) {
    console.log(err);
    return null;
  }
};

export const likeComment = async commentId => {
  try {
    const comment = await axios.post(
      `${REACT_APP_API_URI}/api/post/comments/${commentId}/like`,
      {
        withCredentials: true,
      }
    );
    return comment.data;
  } catch (error) {
    console.log(err);
    return null;
  }
};

export const unlikeComment = async commentId => {
  try {
    const comment = await axios.put(
      `${REACT_APP_API_URI}/api/post/comments/${commentId}/unlike`,
      {
        withCredentials: true,
      }
    );
    return comment.data;
  } catch (error) {
    console.log(err);
    return null;
  }
};
