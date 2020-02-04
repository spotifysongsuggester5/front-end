import React, { useState } from "react";
import axios from "axios";

import {connect} from 'react-redux';
import { Link } from "react-router-dom";

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
        "https://spotify-song-suggester-5.herokuapp.com/api/auth/register",
        credentials
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <h1 className='form-div'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <input
          value={credentials.username}
          name="username"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password </label>
        <input
          value={credentials.password}
          name="password"
          type="text"
          onChange={handleChange}
        />
        <button className='btn btn-success submit'>Submit</button>
        <Link to='/'>Already have an account? Click here!</Link>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials
  };
};

export default connect(mapStateToProps, {})(LoginForm);
