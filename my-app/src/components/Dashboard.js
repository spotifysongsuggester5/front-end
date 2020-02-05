import React from 'react';
import { Link } from 'react-router-dom';
import SongList from './SongList';
import SongForm from './SongForm';

export default function Dashboard () {
    return (
        <div>
            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/" onClick={() => localStorage.clear()}>Sign Out</Link>
            </div>
            <SongList />
            <SongForm />
        </div>
    )
}