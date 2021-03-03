import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../Actions/userActions";

const Login = () => {
  const { REACT_APP_API_URI } = process.env;
  const username = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginAction());
    
  }, []);

  const handleLogin = () => {
    const credentials = {
      username: username.current.value,
      password: password.current.value,
    };
    console.log(credentials);
    dispatch(loginAction(credentials));
  };
  return (
    <div>
      <h1>THIS IS THE LOGIN PAGE</h1>
      <a href={`${REACT_APP_API_URI}/api/auth/google`}>LOGIN WITH GOOGLE</a>
      <a href={`${REACT_APP_API_URI}/api/auth/facebook`}>LOGIN WITH FACEBOOK</a>

      <input type="text" palceholer="username" ref={username} />
      <input type="text" palceholer="password" ref={password} />
      <button onClick={() => handleLogin()}>Submit</button>
    </div>
  );
};

export default Login;
