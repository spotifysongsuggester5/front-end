import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import {axiosWithAuth} from '../utils/axiosWithAuth';

import "../App.css";

import { Button } from "reactstrap";

const SongList = (props) => {
  const [songs, setSongs] = useState([]);
  console.log(props.songs);
  useEffect(() => {
    props.fetchData();
  }, []);

  let id = props.songs.id;
  const deleteFriend = () => {
    axiosWithAuth()
      .delete(`/api/songs/:id`, props.songs)
      .then(response => {
        setSongs(...response.data.filter(song => song.id !== id));
      })
  }
  
  return (
    <div className="card-container">
      <div className="cards">
        <div className="card-header">Artist: {props.songs.artist_name}</div>
        <div className="card-body">
          <p className="card-title">Song Name: {props.songs.song_name}</p>
          <p className="card-text">Duration: {props.songs.duration}</p>
          <Button color="success" src={props.songs.song_url}>
            Play Song
          </Button>
        </div>
        <footer className="card-footer">Genre: {props.songs.genre}</footer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songs: state.songReducer.songs
  };
};

export default connect(mapStateToProps, { fetchData })(SongList);
