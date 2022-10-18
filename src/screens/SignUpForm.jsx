import React, { useRef } from "react";
import "./SignUpForm.css";
import { auth } from "../firebase";
const SignUpForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const signin = (e) => {
    console.log("signIn");
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log("authuser", authUser);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signup_div">
      <form className="signup_form">
        <h1 className="signup_heading">Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Enter email" />
        <input ref={passwordRef} type="password" placeholder="Enter password" />
        <button type="submit" onClick={signin}>
          Sign In
        </button>
        <h4>
          <span className="signup_gray">New to Netflix ? </span>
          <span className="signup_link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpForm;
