import React, { useState } from "react";

import {connect} from 'react-redux';
import {login} from '../actions';

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
    props.history.push('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username: </label>
        <input
          value={credentials.username}
          name="username"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">password: </label>
        <input
          value={credentials.password}
          name="password"
          type="text"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    credentials: state.credentials
  }
}

export default connect(
  mapStateToProps,
  {login}
)(LoginForm);
