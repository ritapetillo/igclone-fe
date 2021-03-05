import React, { useEffect, useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import Logo from "../../Assets/ig-logo.png";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//*userAction
import { registerUserAction } from "../../Actions/userActions";

//*STYLE
import "./Authentication.scss";

const SignUp = () => {
  const fullname = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();

  const dispatch = useDispatch();

  const { REACT_APP_API_URI } = process.env;

  useEffect(() => {
    dispatch(registerUserAction());
  }, [username, fullname, email, password]);

  const handleRegister = (e) => {
    e.preventDefault();

    const credentials = {
      name: fullname.current.value.split(" ")[0],
      lastname: fullname.current.value.split(" ")[1],
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    console.log(credentials.name);
    dispatch(registerUserAction(credentials));
  };

  // const currentUser = useSelector(state => state.currentUser.user.currentUser);
  // const history = useHistory();
  // useEffect(() => {}, []);
  // useEffect(() => {
  //   if (currentUser?.email) {
  //     history.push("/");
  //   }
  // }, []);

  const props = useSpring({
    opacity: 1,

    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <Container className="SignUp__container ">
      <div className="SignUp__wrapper">
        <animated.div style={props} className="SignUp__form">
          <Form onSubmit={handleRegister}>
            <div className="d-flex justify-content-center">
              <img src={Logo} alt="Instagram logo" className="Auth__logo" />
            </div>
            <div className="d-flex justify-content-center">
              <h2 className="SignUp__CallToAction mb-4">
                Sign up to see photos and videos from your friends.
              </h2>
            </div>

            <a
              href={`${REACT_APP_API_URI}/api/auth/facebook`}
              className="text-decoration-none"
            >
              <Button
                className="SignUp__button py-2 px-4 d-flex justify-content-center"
                onClick={() => {
                  window.location.href = `${REACT_APP_API_URI}/api/auth/facebook`;
                }}
              >
                <AiFillFacebook />
                <span className="font-weight-bold ml-3">
                  {" "}
                  Log in with Facebook
                </span>
              </Button>
            </a>

            <a
              href={`${REACT_APP_API_URI}/api/auth/google`}
              className="text-decoration-none"
            >
              <Button
                className="SignUp__button--OAuthGoogle py-2 px-4 mt-3 d-flex justify-content-center"
                onClick={() => {
                  window.location.href = `${REACT_APP_API_URI}/api/auth/google`;
                }}
              >
                <AiOutlineGoogle />
                <span className="font-weight-bold ml-3">
                  {" "}
                  Log in with Google
                </span>
              </Button>
            </a>

            <div className="Auth__divider">
              <div className="Auth__divider__line"></div>
              <div className="Auth__divider__or">OR</div>
              <div className="Auth__divider__line"></div>
            </div>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="py-3 Auth__formControl"
                type="text"
                ref={fullname}
                placeholder="Full Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="py-3 Auth__formControl"
                type="email"
                ref={email}
                placeholder="Email"
              />
            </Form.Group>

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
          <Link to="/login">
            <span className="mr-3  SignUp__form__noAccount__signup">
              Log in
            </span>
          </Link>
        </animated.div>
      </div>
    </Container>
  );
};

export default SignUp;
