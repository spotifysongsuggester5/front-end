import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import {connect} from 'react-redux';
import {fetchData} from './actions';
import Dashboard from './components/Dashboard';
import Login from "./components/Login";

const App = props => {
  props.fetchData();
  return (
    <div className="App">
    <button onClick={() => localStorage.clear()}>Sign Out</button>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
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
