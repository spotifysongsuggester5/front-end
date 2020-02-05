import React from "react";
import { Button } from "reactstrap";
import "../App.css";

const Song = (props) => {
  return (
    <div className="cards">
      <div className="card-body">
        <p className="card-title">{props.song.song_name}</p>
        <div className="card-header">{props.song.artist_name}</div>
        <div className='button-div'>
          <Button target='_blank' href={props.song.song_url} color="success">
              Listen
          </Button>
          <Button onClick={() => props.saveSong(props.song)} color="success">
              Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Song;
