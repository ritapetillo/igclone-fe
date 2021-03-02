import axios from "axios";
const { REACT_APP_API_URI } = process.env;
const refreshAuthLogic = (failedRequest) =>
  axios
    .post(`${REACT_APP_API_URI}/api/auth/refresh`)
    .then((tokenRefreshResponse) => {
      return Promise.resolve();
    });

export default axios;
