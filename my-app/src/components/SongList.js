import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";

import "../App.css";

import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const SongList = (props) => {
  props.fetchData();
  return (
    <div className="card-container">
      <div className="cards">
        <Card>
          <CardHeader
            style={{ backgroundColor: "#333", borderColor: "#333" }}
          >
            Artist: {props.songs.artist_name}
          </CardHeader>
          <CardBody style={{ backgroundColor: "#3b3939", borderColor: "#333" }}>
            <CardTitle>Song Name: {props.songs.song_name}</CardTitle>
            <CardText>Duration: {props.songs.duration}</CardText>
            <Button color="success" src={props.songs.song_url}>
              Play Song
            </Button>
          </CardBody>
          <CardFooter
            style={{ backgroundColor: "#333", borderColor: "#333" }}
          >
            Genre: {props.songs.genre}
          </CardFooter>
        </Card>
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
