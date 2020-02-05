import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Profile = props => {
    return (
        <div>
            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/" onClick={() => localStorage.clear()}>Sign Out</Link>
            </div>
            <h1>Hello {props.username}!</h1>
            <h3>Saved songs</h3>
            <h3>Suggested songs</h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        username: state.authReducer.credentials.username,
        songs: state.songReducer.songs
    };
};

export default connect(mapStateToProps, {})(Profile);