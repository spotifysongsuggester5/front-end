import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData, deleteSong } from "../actions";

import "../App.css";
import Song from "./Song";

const SongList = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div className="main-card-container">
      {props.songs.map((el) => (
        <Song song={el} key={el.id} deleteSong={props.deleteSong} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songs: state.songReducer.songs
  };
};

export default connect(mapStateToProps, { fetchData, deleteSong })(SongList);
