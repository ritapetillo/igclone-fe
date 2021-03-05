import React, { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import Logo from "../../Assets/ig-logo.png";
//*STYLE
import "./Authentication.scss";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../Actions/userActions";
import { IoFilterCircle } from "react-icons/io5";
const { REACT_APP_API_URI } = process.env;

const SignIn = () => {
  const props = useSpring({
    opacity: 1,

    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  const dispatch = useDispatch();
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
                type="email"
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className="py-3 Auth__formControl"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
            <Button
              className="SignIn__button py-2 px-4 justify-content-center"
              type="submit"
            >
              SIGN IN
            </Button>
            <div className="Auth__divider">
              <div className="Auth__divider__line"></div>
              <div className="Auth__divider__or">OR</div>
              <div className="Auth__divider__line"></div>
            </div>
            <Button
              className="SignIn__button--OAuthFacebook py-2 mt-3 px-4 justify-content-center"
              onClick={() => {
                window.location.href = `${REACT_APP_API_URI}/api/auth/facebook`;
              }}
            >
              <AiFillFacebook className="mr-3" />
              <span className="font-weight-bold">Log in with Facebook</span>
            </Button>
            <Button
              className="SignIn__button--OAuthGoogle pt-1  mb-4 px-4 justify-content-center"
              onClick={() => {
                window.location.href = `${REACT_APP_API_URI}/api/auth/google`;
              }}
            >
              <AiFillGoogleCircle className="mr-3" />
              <span className="font-weight-bold">Log in with Google</span>
            </Button>
            <div className="d-flex justify-content-center SignIn__forgotPassword">
              <span>Forgot password?</span>
            </div>
          </Form>
        </animated.div>
        <animated.div
          style={props}
          className="SignIn__form__noAccount mt-3  px-4"
        >
          <span className="ml-3">Don't have an account?</span>
          <Link to="/signup">
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
