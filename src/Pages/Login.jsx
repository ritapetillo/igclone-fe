import React from "react";

const Login = () => {
  const { REACT_APP_API_URI } = process.env;
  return (
    <div>
      <h1>THIS IS THE LOGIN PAGE</h1>
      <a href={`${REACT_APP_API_URI}/api/auth/google`}>LOGIN WITH GOOGLE</a>
      <a href={`${REACT_APP_API_URI}/api/auth/facebook`}>LOGIN WITH FACEBOOK</a>
    </div>
  );
};

export default Login;
