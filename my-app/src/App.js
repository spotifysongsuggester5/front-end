import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/Login';
import {connect} from 'react-redux';
import {fetchData} from './actions';
import Dashboard from './components/Dashboard';

const App = props => {
  props.fetchData();
  return (
    <div className="App">
      <Router>
        <h1>Hello world!!</h1>
        <Route path="/">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state
  };
};

export default connect(mapStateToProps, {fetchData})(App);
