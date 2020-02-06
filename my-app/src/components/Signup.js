import React, { useState } from "react";
import axios from "axios";

import { Spinner } from "reactstrap";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../App.css";

function LoginForm(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [loader, setLoader] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    setLoader(true);
    event.preventDefault();
    axios
      .post(
        "https://spotify-song-suggester-5.herokuapp.com/api/auth/register",
        credentials
      )
      .then((response) => {
        console.log(response);
        axios
          .post(
            "https://spotify-song-suggester-5.herokuapp.com/api/auth/login",
            credentials
          )
          .then((response) => {
            console.log(response);
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("message", response.data.message);
            alert('Sign up complete! You will now be redirected to your new dashboard!');
            props.history.push("/dashboard");
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => setLoader(false));
      });
  };

  return (
    <div className='form-div'>
      <h1>Sign Up</h1>
      {loader ? (
        <Spinner className="loader" style={{ width: "3rem", height: "3rem" }} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username </label>
          <input
            value={credentials.username}
            name="username"
            type="text"
            onChange={handleChange}
            minLength="3"
            required
          />
          <br />
          <label htmlFor="password">Password </label>
          <input
            value={credentials.password}
            name="password"
            type="password"
            onChange={handleChange}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
          <button className="btn btn-success submit">Submit</button>
          <Link to="/">Already have an account? Click here!</Link>
        </form>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials
  };
};

export default connect(mapStateToProps, {})(LoginForm);
