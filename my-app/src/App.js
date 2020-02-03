import React from 'react';
import './App.css';

import {connect} from 'react-redux';
import {fetchData, signUp} from './actions';

const App = props => {
  console.log(props);
  return (
    <div className="App">
      <h1>Hello world!!</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    credentials: state.authReducer.credentials,
  }
}

export default connect(
  mapStateToProps,
  {fetchData, signUp}
)(App);