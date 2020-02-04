import React from 'react';
import { Link } from 'react-router-dom';
import SongList from './SongList';

export default function Dashboard () {

    return (
        <div>
            <div className="nav-links">
                <Link to="/" onClick={() => localStorage.clear()}>Sign Out</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <h1>Hello Dash!</h1>
                <SongList />
        </div>
    )
}