import React, { useState } from 'react';

const SavedSong = props => {
    const [editing, setEditing] = useState(false);
    const [updatedSong, setUpdatedSong] = useState(props.song);

    const handleChange = (event) => {
        event.preventDefault();
        setUpdatedSong({
            ...updatedSong,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const song = {
            original: props.song,
            updated: updatedSong
        }
        props.updateSong(song);
        setEditing(false);
        //  axiosWithAuth()
        //     .put('', updatedSong)
        //     .then(res => {
        //         console.log(res);
        //         props.fetchData();
        //     })
        //     .catch(err => console.log(err));
    };

    return (
        <div>
            <p>{props.song.song_name} - {props.song.artist_name}</p>
            <button onClick={() => props.deleteSong(props.song)}>Delete</button>
            <button onClick={() => setEditing(true)}>Edit</button>
            {editing && (
                <form onSubmit={handleSubmit}>
                    <h2>Update {props.song.song_name} - {props.song.artist_name}</h2>
                    <label htmlFor="name">Name</label>
                    <input
                        value={updatedSong.song_name}
                        name="song_name"
                        type="text"
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="artist">Artist</label>
                    <input
                        value={updatedSong.artist_name}
                        name="artist_name"
                        type="text"
                        onChange={handleChange}
                    />
                    <br />
                    <button className='btn-success btn'>Submit</button>
                </form>
            )}
        </div>
    );
};

export default SavedSong;