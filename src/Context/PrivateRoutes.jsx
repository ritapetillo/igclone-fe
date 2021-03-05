import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import { loginAction } from "../Actions/userActions";

const PrivateRoute = ({ path, exact, component }) => {
  const isAuth = useSelector((state) => state.currentUser.isAuth);
  const isLoading = useSelector((state) => state.currentUser.isLoading);

  if (isLoading) {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  } else {
    return isAuth ? (
      <Route path={path} exact={exact} component={component} />
    ) : (
      <Redirect to="/" />
    );
  }
};
export default PrivateRoute;
