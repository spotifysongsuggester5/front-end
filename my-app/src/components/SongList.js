import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions';

const SongList = props => {
    props.fetchData();
    setTimeout(() => {
    console.log(props.songs);        
      }, 1000);
    return (
        <div>
            <h1>Song List</h1>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state); 
    return {
        songs: state.authReducer.songs,
    }
}

export default connect(
    mapStateToProps,
    {fetchData}
)(SongList);