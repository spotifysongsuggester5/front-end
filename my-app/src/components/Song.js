import React from "react";
import { Button } from "reactstrap";
import "../App.css";

const Song = (props) => {
  return (
    <div className="cards">
      <div className="card-header">Artist: {props.song.artist_name}</div>
      <div className="card-body">
        <p className="card-title">Song Name: {props.song.song_name}</p>
        <p className="card-text">Duration: {props.song.duration}</p>
        <div className='button-div'>
            <Button color="success">
                Play
            </Button>
            <Button color="success">
                Delete
            </Button>
        </div>
      </div>
      <footer className="card-footer">Genre: {props.song.genre}</footer>
    </div>
  );
};

export default Song;
