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
            <div>
                <h1>Song List</h1>
            </div>
            <div>
                <h3>Song: {props.songs.song_name}</h3>
                <h3>Artist: {props.songs.artist_name}</h3>
                <h3>Duration: {props.songs.duration}</h3>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        songs: state.authReducer.songs,
    }
}

export default connect(
    mapStateToProps,
    {fetchData}
)(SongList);