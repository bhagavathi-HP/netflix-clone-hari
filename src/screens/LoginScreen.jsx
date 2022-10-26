import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpForm from "./SignUpForm";
const LoginScreen = () => {
  const getstart = "Get Started >";
  const [signIn, setSignin] = useState(false);
  return (
    <div className="loginscreen">
      <div className="loginscreen_background">
        <img
          className="loginscreen_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
        <button onClick={() => setSignin(true)} className="loginscreen_button">
          Sign In
        </button>
        <div className="loginscreen_gradient" />
      </div>
      <div className="loginscreen_body">
        {signIn ? (
          <SignUpForm />
        ) : (
          <>
            <h1>Unlimited Films , TV shows and more .</h1>
            <h2>Watch Anywhere . Cancel Anytime.</h2>
            <h3>
              Ready to watch ? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginscreen_input">
              <form>
                <input
                  type="email"
                  className="login_input"
                  placeholder="Email address"
                  autoFocus
                />
                <button
                  onClick={() => setSignin(true)}
                  className="loginscreen_getstarted"
                >
                  {getstart}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
