import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";

const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      <h1>Hello world!!</h1>
      <Route path="/">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    login: state
  };
};

export default connect(mapStateToProps, {})(App);
