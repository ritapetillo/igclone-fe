import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const { REACT_APP_API_URI } = process.env;
const refreshAuthLogic = (failedRequest) =>
  axios
    .post(`${REACT_APP_API_URI}/api/auth/refresh`)
    .then((tokenRefreshResponse) => {
      return Promise.resolve();
    });
axios.defaults.withCredentials = true;
// createAuthRefreshInterceptor(axios, refreshAuthLogic);

export default axios;
