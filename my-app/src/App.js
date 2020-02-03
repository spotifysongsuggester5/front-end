import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/Login';
import {connect} from 'react-redux';
import {fetchData} from './actions';

const App = props => {
  props.fetchData();
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
  return {
    login: state
  };
};

export default connect(mapStateToProps, {fetchData})(App);
