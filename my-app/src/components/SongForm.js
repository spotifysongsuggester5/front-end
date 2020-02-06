import React, { useState } from "react";
import { connect } from "react-redux";
import {saveSong} from '../actions';

function LoginForm(props) {
    const [newSong, setNewSong] = useState({
        song_name: '',
        artist_name: ''
    })

    const handleChange = (event) => {
        event.preventDefault();
        setNewSong({
            ...newSong,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.saveSong(newSong);
    };
    console.log(newSong);

    return (
        <div className='song-form'>
            <form onSubmit={handleSubmit}>
            <h2>Add Song:</h2>
            <label htmlFor="name">Name</label>
            <input
                value={newSong.song_name}
                name="song_name"
                type="text"
                onChange={handleChange}
            />
            <br />
            <label htmlFor="artist">Artist</label>
            <input
                value={newSong.artist_name}
                name="artist_name"
                type="text"
                onChange={handleChange}
            />
            <br />
            <button className='btn-success btn'>Submit</button>
            </form>
        </div>
        );
    }

const mapStateToProps = (state) => {
    console.log(state);
  return {
    newSong: state.songReducer.newSong,
  };
};

export default connect(mapStateToProps, {saveSong})(LoginForm);
