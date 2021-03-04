import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../Actions/userActions";
import Loader from "react-loader-spinner";
import { Redirect, useHistory } from "react-router-dom";
import Login from "../Pages/Login";
export const authContext = createContext();

export const AuthContext = ({ children }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.currentUser.isAuth);
  const isLoading = useSelector((state) => state.currentUser.isLoading);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setLoading(isAuth);
  }, [isAuth]);
  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    await dispatch(loginAction());
    if (!isAuth) {
      history.push("/login");
    }
  };
  if (!loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader
          type="Grid"
          color="#DA2E7A"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  } else {
    if (isAuth) {
      return <authContext.Provider>{children}</authContext.Provider>;
    } else {
      return history.push("/login");
    }
  }
};
