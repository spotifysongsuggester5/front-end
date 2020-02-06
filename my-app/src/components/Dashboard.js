import React from 'react';
import { Link } from 'react-router-dom';
import SongList from './SongList';
import SongForm from './SongForm';

export default function Dashboard () {
    return (
        <div>
            <h1>{localStorage.getItem('message')}</h1>
            <h3>Here are some popular songs to get you started</h3>
            <SongList />
            <div className="nav-links">
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={() => localStorage.clear()}>Sign Out</Link>
            </div>
        </div>
    )
}