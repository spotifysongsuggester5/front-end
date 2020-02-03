import React from 'react';
import './App.css';

import {connect} from 'react-redux';
import {fetchData, signUp} from './actions';

const App = props => {
  props.fetchData();
  console.log(props);
  return (
    <div className="App">
      <h1>Hello!!</h1>
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