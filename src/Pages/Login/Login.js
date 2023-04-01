import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
        alt="Amazon"
        className="login__amazonLogo"
      />
      <div className="login__formContainer">
        <form onSubmit={handleSubmit} className="login__form">
          <h2>Sign-In</h2>
          <div>
            <label htmlFor="email" className="login__formLabel">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="login__formInput"
            />
          </div>
          <div>
            <label htmlFor="password" className="login__formLabel">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="login__formInput"
            />
          </div>
          <button type="submit" className="login__formButton">
            Sign In
          </button>
        </form>
        <div className="login__signup">
          <p>
            By signing-in you agree to Amazon's condition of Use & Sale. Please
            see our Privacy Notice, our Cookie Notice and our Interest Base-ads
            Notice.
          </p>
          <button className="login__signupButton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
