import React, { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

import * as Yup from "yup";

import { connect } from "react-redux";

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
    axios
      .post(
        "https://spotify-song-suggester-5.herokuapp.com/api/auth/login",
        props.credentials
      )
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        console.log(response);
      });
      setTimeout(() => {
        props.history.push("/dashboard");
      }, 1000);
  };

  return (
    <div className='form-div'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <input
          className="username-bars"
          value={credentials.username}
          name="username"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password </label>
        <input
          className="password-bars"
          value={credentials.password}
          name="password"
          type="text"
          onChange={handleChange}
        />
        <button className='btn btn-success submit'>Submit</button>
        <Link to='/signup'>Don't have account? Click here!</Link>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    credentials: state.authReducer.credentials
  };
};

export default connect(mapStateToProps, {})(LoginForm);
