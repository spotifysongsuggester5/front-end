import React from 'react';
import { Button } from 'reactstrap';

const Song = props => {
    return (
        <div className="card-container">
            <div className="cards">
                <div className="card-header">Artist: {props.song.artist_name}</div>
                <div className="card-body">
                    <p className="card-title">Song Name: {props.song.song_name}</p>
                    <p className="card-text">Duration: {props.song.duration}</p>
                    <Button color="success" src={props.song.song_url}>
                        Play Song
                    </Button>
                </div>
                <footer className="card-footer">Genre: {props.song.genre}</footer>
            </div>
        </div>
    );
};

export default Song;