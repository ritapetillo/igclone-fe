import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const getPostComments = async (postID) => {
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

export const newComment = async (data) => {
  try {
    console.log("data api", data.text)
    console.log("postId api", data.postId)

    const comment = await axios.post(
      `${REACT_APP_API_URI}/api/post/comments/${data.postId}`,
      {text: data.text},
      {
        withCredentials: true,
      }
    );
  console.log("did this go through", comment)
    return comment.data;
    
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const editComment = async (data, postId) => {
  try {
    const comment = await axios.put(
      `${REACT_APP_API_URI}/api/post/comments/${data._id}`,
      {text: data.text, postId: postId},
      {
        withCredentials: true,
      }
    );
    return comment.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteComment = async (data, postId) => {
  try {
    const comment = await axios.delete(
      `${REACT_APP_API_URI}/api/post/comments/${postId}/${data._id}`,
      {
        withCredentials: true,
      }
    );
    return comment.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const likeAComment = async (commentId) => {
  try {
    const comment = await axios.post(
      `${REACT_APP_API_URI}/api/post/comments/${commentId}/like`,
      {
        withCredentials: true,
      }
    );
    return comment.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const unlikeAComment = async (commentId) => {
  try {
    const comment = await axios.put(
      `${REACT_APP_API_URI}/api/post/comments/${commentId}/unlike`,
      {
        withCredentials: true,
      }
    );
    return comment.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
