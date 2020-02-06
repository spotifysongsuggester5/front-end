import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SongForm from './SongForm';

const Profile = props => {
    return (
        <div>
            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/" onClick={() => localStorage.clear()}>Sign Out</Link>
            </div>
            <h1>Hello {props.username}!</h1>
            <h3>Saved songs</h3>
            <div>
                {props.savedSongs.map(el => (
                    <p>{el.song_name} - {el.artist_name}</p>
                ))}
            </div>
            <h3>Suggested songs</h3>
            <SongForm />
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

export default connect(mapStateToProps, {})(Profile);