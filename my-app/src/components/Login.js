import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { connect } from "react-redux";

import { Spinner } from "reactstrap";
import "../App.css";

function LoginForm(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (event) => {
    setLoader(true);
    event.preventDefault();
    axios
      .post(
        "https://spotify-song-suggester-5.herokuapp.com/api/auth/login",
        credentials
      )
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        console.log(response);
        props.history.push("/dashboard");
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoader(false))
  };

  return (
    <div className="form-div">
      <h1>Login</h1>
      {loader ? (
        <Spinner className="loader" style={{ width: "3rem", height: "3rem" }} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username </label>
          <input
            className="username-bars"
            value={credentials.username}
            name="username"
            type="text"
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="password">Password </label>
          <input
            className="password-bars"
            value={credentials.password}
            name="password"
            type="text"
            onChange={handleChange}
            required
          />
          <button className="btn btn-success submit">Submit</button>
          <Link to="/signup">Don't have account? Click here!</Link>
        </form>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    credentials: state.authReducer.credentials
  };
};

export default connect(mapStateToProps, {})(LoginForm);
