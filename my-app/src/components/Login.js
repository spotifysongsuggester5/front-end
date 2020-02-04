import React, { useState } from "react";

import * as Yup from "yup";

import { connect } from "react-redux";
import { login } from "../actions";

// const yup = require("yup");

// const schema = Yup.object().shape({
//   username: Yup.require()
//     .min()
//     .error(),
//   password: Yup.require()
//     .min()
//     .error()
// });

function LoginForm(props) {
  console.log(props);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(credentials);
    setTimeout(() => {
      props.history.push("/dashboard");
    }, 500);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username: </label>
        <input
          className="username-bars"
          value={credentials.username}
          name="username"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">password: </label>
        <input
          className="password-bars"
          value={credentials.password}
          name="password"
          type="text"
          onChange={handleChange}
        />
        <br />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials
  };
};

export default connect(mapStateToProps, { login })(LoginForm);
