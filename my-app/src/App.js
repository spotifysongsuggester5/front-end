import React from 'react';
import './App.css';

import {connect} from 'react-redux';

const App = props => {
  console.log(props);
  return (
    <div className="App">
      <h1>Hello world!!</h1>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    login: state,
  }
}

export default connect(
  mapStateToProps,
  {}
)(App);
