import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Login from "./components/Login";
import SongForm from "./components/SongForm";

const App = () => {
  return (
    <div className="App">
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

export default App;
