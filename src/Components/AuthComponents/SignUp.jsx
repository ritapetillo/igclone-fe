import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import Logo from "../../Assets/ig-logo.png";

//*STYLE
import "./Authentication.scss";
const { REACT_APP_API_URI } = process.env;

const SignUp = () => {
  const props = useSpring({
    opacity: 1,

    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <Container className="SignUp__container ">
      <div className="SignUp__wrapper">
        <animated.div style={props} className="SignUp__form">
          <Form>
            <div className="d-flex justify-content-center">
              <img src={Logo} alt="Instagram logo" className="Auth__logo" />
            </div>
            <div className="d-flex justify-content-center">
              <h2 className="SignUp__CallToAction mb-4">
                Sign up to see photos and videos from your friends.
              </h2>
            </div>
            <Button
              className="SignUp__button py-2 px-4 d-flex justify-content-center"
              type="submit"
            >
              <AiFillFacebook />
              <span className="font-weight-bold ml-3">
                {" "}
                Log in with Facebook
              </span>
            </Button>
            <Button
              className="SignUp__button py-2 px-4 mt-3 d-flex justify-content-center"
              onClick={() => {
                window.location.href = `${REACT_APP_API_URI}/api/auth/google`;
              }}
            >
              <AiOutlineGoogle />
              <span className="font-weight-bold ml-3"> Log in with Google</span>
            </Button>

            <div className="Auth__divider">
              <div className="Auth__divider__line"></div>
              <div className="Auth__divider__or">OR</div>
              <div className="Auth__divider__line"></div>
            </div>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="py-3 Auth__formControl"
                type="text"
                placeholder="Full Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="py-3 Auth__formControl"
                type="email"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="py-3 Auth__formControl"
                type="text"
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

            <Button
              className="SignUp__button py-2 px-4 justify-content-center"
              type="submit"
            >
              NEXT
            </Button>
            <div className="d-flex justify-content-center mt-4">
              <p className="SignUp__CookiesPolicy ">
                By signing up, you agree to our Terms . Learn how we collect,
                use and share your data in our Data Policy and how we use
                cookies and similar technology in our Cookies Policy .
              </p>
            </div>
          </Form>
        </animated.div>
        <animated.div
          style={props}
          className="SignUp__form__noAccount mt-3  px-4 text-center"
        >
          <span className="ml-3">Have an account?</span>
          <span className="mr-3  SignUp__form__noAccount__signup"> Log in</span>
        </animated.div>
      </div>
    </Container>
  );
};

export default SignUp;
