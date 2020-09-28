import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import GithubContext from "../context/GithubContext";
import firebase from "firebase/app";
const Signin = () => {
  const [email, setEmail] = useState("hello@gmail.com");
  const [password, setPassword] = useState("123456");
  const context = useContext(GithubContext);
  const submitHandler = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  if (context.user?.uid) {
    return <Redirect to="/" />;
  }
  return (
    <div class="container">
      <form>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            class="form-control form-control-lg"
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <small class="form-text text-muted">
            Your email will not ever be shared
          </small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            class="form-control"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={submitHandler}
          class="btn btn-primary btn-block"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
