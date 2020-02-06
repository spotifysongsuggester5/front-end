import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SongForm from './SongForm';
import SavedSong from './SavedSong';
import {deleteSong, updateSong} from '../actions';

const Profile = props => {
    const [addSong, setAddSong] = useState(false);
    
    return (
        <div>
            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/" onClick={() => localStorage.clear()}>Sign Out</Link>
            </div>
            <h1>Hello {props.username}!</h1>
            <h3>Saved songs</h3>
            <div>
                {props.savedSongs.map((el, index) => (
                    <SavedSong song={el} key={index} updateSong={props.updateSong} deleteSong={props.deleteSong} />
                ))}
                <button onClick={() => setAddSong(true)} >Add a Song!</button>
                {addSong && (
                    <SongForm setAddSong={setAddSong} />
                )}
            </div>
            <h3>Suggested songs</h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        username: state.authReducer.credentials.username,
        savedSongs: state.authReducer.savedSongs,
        songs: state.songReducer.songs
    };
};

export default connect(mapStateToProps, {deleteSong, updateSong})(Profile);