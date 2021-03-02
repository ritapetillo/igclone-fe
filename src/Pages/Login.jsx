import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../Actions/userActions";

const Login = () => {
  const { REACT_APP_API_URI } = process.env;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginAction());
  }, []);
  return (
    <div>
      <h1>THIS IS THE LOGIN PAGE</h1>
      <a href={`${REACT_APP_API_URI}/api/auth/google`}>LOGIN WITH GOOGLE</a>
      <a href={`${REACT_APP_API_URI}/api/auth/facebook`}>LOGIN WITH FACEBOOK</a>

    </div>
  );
};

export default Login;
