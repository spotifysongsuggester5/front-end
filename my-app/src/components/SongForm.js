import React, { useState } from "react";
import {Link} from 'react-router-dom';

import { connect } from "react-redux";
import {addSong} from '../actions';

function LoginForm(props) {
    const [newSong, setNewSong] = useState(props.newSong)
    
    const handleChange = (event) => {
    event.preventDefault();
    setNewSong({
        ...newSong,
        [event.target.name]: event.target.value
    });
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newSong);
    // props.addSong(newSong);
    setNewSong({
        ...newSong
    })
    };

    return (
        <div className='form-div'>
            <form onSubmit={handleSubmit}>
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
            <button>Submit</button>
            </form>
        </div>
        );
    }

const mapStateToProps = (state) => {
    console.log(state);
  return {
      newSong: state.songReducer.newSong
  };
};

export default connect(mapStateToProps, {addSong})(LoginForm);
