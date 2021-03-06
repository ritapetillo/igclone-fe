import React, { useEffect, useRef } from "react";
import { loginAction } from "../../Actions/userActions";
import { useHistory, Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import Logo from "../../Assets/ig-logo.png";
//*STYLE
import "./Authentication.scss";

import { useDispatch, useSelector } from "react-redux";
import { IoFilterCircle } from "react-icons/io5";
const { REACT_APP_API_URI } = process.env;

const SignIn = () => {
  const { REACT_APP_API_URI } = process.env;

  const username = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loginAction());
  // }, [username, password]);

  const handleLogin = () => {
    const credentials = {
      username: username.current.value,
      password: password.current.value,
    };
    console.log(credentials + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    dispatch(loginAction(credentials));
    history.push('/')
  };

  const props = useSpring({
    opacity: 1,

    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const currentUser = useSelector(
    (state) => state.currentUser.user.currentUser
  );
  const history = useHistory();
  useEffect(() => {}, []);
  useEffect(() => {
    if (currentUser?.email) {
      history.push("/");
    }
  }, []);

  return (
    <Container className="SignIn__container ">
      <div className="SignIn__wrapper">
        <animated.div style={props} className="SignIn__form">
          <Form>
            <div className="d-flex justify-content-center">
              <img src={Logo} alt="Instagram logo" className="Auth__logo" />
            </div>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="py-3 Auth__formControl"
                type="text"
                ref={username}
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className="py-3 Auth__formControl"
                type="password"
                ref={password}
                placeholder="Password"
              />
            </Form.Group>

            <Button
              className="SignIn__button py-2 px-4 justify-content-center"
              onClick={handleLogin}
            >
              SIGN IN
            </Button>

            <div className="Auth__divider">
              <div className="Auth__divider__line"></div>
              <div className="Auth__divider__or">OR</div>
              <div className="Auth__divider__line"></div>
            </div>

            <a
              href={`${REACT_APP_API_URI}/api/auth/facebook`}
              className="text-decoration-none"
            >
              <Button className="SignIn__button--OAuthFacebook py-2 mt-3 px-4 justify-content-center">
                <AiFillFacebook className="mr-3" />
                <span className="font-weight-bold">Log in with Facebook</span>
              </Button>
            </a>

            <a
              href={`${REACT_APP_API_URI}/api/auth/google`}
              className="text-decoration-none"
            >
              <Button className="SignIn__button--OAuthGoogle pt-1  mb-4 px-4 justify-content-center">
                <AiFillGoogleCircle className="mr-3 " />
                <span className="font-weight-bold">Log in with Google</span>
              </Button>
            </a>

            <div className="d-flex justify-content-center SignIn__forgotPassword">
              <span>Forgot password?</span>
            </div>
          </Form>
        </animated.div>
        <animated.div
          style={props}
          className="SignIn__form__noAccount mt-3  px-4"
        >
          <span className="ml-3">Don't have an account? </span>
          <Link to="/signup" className="text-decoration-none">
            <span className="mr-3 font-weight-bold SignIn__form__noAccount__signup">
              Sign up
            </span>
          </Link>
        </animated.div>
      </div>
    </Container>
  );
};

export default SignIn;
