import React, { useState } from "react";
import { connect } from "react-redux";
import {addSong} from '../actions';

function LoginForm(props) {
    const [newSong, setNewSong] = useState([])
    // props.addSong()
    const handleChange = (event) => {
        event.preventDefault();
        setNewSong({
            ...newSong,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addSong(newSong);
    };
    console.log(newSong);

    return (
        <div className='song-form'>
            <form onSubmit={handleSubmit}>
            <h2>Add Song:</h2>
            <label htmlFor="name">Name</label>
            <input
                value={newSong.name}
                name="name"
                type="text"
                onChange={handleChange}
            />
            <br />
            <label htmlFor="artist">Artist</label>
            <input
                value={newSong.artist}
                name="artist"
                type="text"
                onChange={handleChange}
            />
            <br />
            <label htmlFor="genre">Genre</label>
            <input
                value={newSong.genre}
                name="genre"
                type="text"
                onChange={handleChange}
            />
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

export default connect(mapStateToProps, {addSong})(LoginForm);
