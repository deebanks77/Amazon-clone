import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import useStateValue from "../../StateProvider/StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [{ user }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const handleSignin = (e) => {
    // e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { accessToken } = userCredential.user;

        dispatch({ type: "SIGN_IN", user: accessToken });
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Invalid email or password");
        setTimeout(() => {
          const timeout = setError("");

          clearTimeout(timeout);
        }, 2000);
        // setEmail("");
        // setPassword("");
      });
  };

  const handleCreateAccount = (e) => {
    // e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { accessToken } = userCredential.user;

        dispatch({ type: "SIGN_UP", user: accessToken });
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        setError("Password is too weak");
        setTimeout(() => {
          const timeout = setError("");

          clearTimeout(timeout);
        }, 2000);
        // setEmail("");
        // setPassword("");
      });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
        alt="Amazon"
        className="login__amazonLogo"
      />
      <div className="login__formContainer">
        <form className="login__form">
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
              Password{" "}
              {error && <span className="login__error-message">{error}</span>}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="login__formInput"
            />
          </div>
          <button
            type="button"
            onClick={handleSignin}
            className="login__formButton"
          >
            Sign In
          </button>
        </form>
        <div className="login__signup">
          <p>
            By signing-in you agree to Amazon's condition of Use & Sale. Please
            see our Privacy Notice, our Cookie Notice and our Interest Base-ads
            Notice.
          </p>
          <button onClick={handleCreateAccount} className="login__signupButton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
