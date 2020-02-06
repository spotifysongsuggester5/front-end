import React from 'react';

const SavedSong = props => {
    return (
        <div>
            <p>{props.song.song_name} - {props.song.artist_name}</p>
            <button onClick={() => props.deleteSong(props.song)}>Delete</button>
        </div>
    );
};

export default SavedSong;