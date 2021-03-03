import { POST_FAIL, POST_LOADING, POST_SUCCESS } from "../Actions/types";

const initialState = {
  posts: [],
  loading: false,
  error_msg: "",
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, payload],
        error_msg: "",
      };
    case POST_FAIL:
      return {
        ...state,
        posts: [],
        error_msg: "Something went wrong posting",
      };
    default:
      return state;
  }
};

export default postReducer;
