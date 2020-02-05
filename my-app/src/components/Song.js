import React from "react";
import { Button } from "reactstrap";
import "../App.css";

const Song = (props) => {
  return (
    <div className="cards">
      <div className="card-body">
        <p className="card-title">Song Name: {props.song.song_name}</p>
        <div className="card-header">Artist: {props.song.artist_name}</div>
        <div className='button-div'>
            <Button color="success">
                Play
            </Button>
            <Button color="success">
                Delete
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Song;
