import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import Logo from "../../Assets/ig-logo.png";

//*STYLE
import "./Authentication.scss";

const SignIn = () => {
  const props = useSpring({
    opacity: 1,

    from: { opacity: 0 },
    config: { duration: 1000 },
  });

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
              type="submit"
            >
              <AiFillFacebook className="mr-3" />
              <span className="font-weight-bold">Log in with Facebook</span>
            </Button>
            <Button
              className="SignIn__button--OAuthGoogle pt-1  mb-4 px-4 justify-content-center"
              type="submit"
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
          <span className="mr-3 font-weight-bold SignIn__form__noAccount__signup">
            Sign up
          </span>
        </animated.div>
      </div>
    </Container>
  );
};

export default SignIn;
