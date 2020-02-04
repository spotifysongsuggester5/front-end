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
  setTimeout(() => {
    console.log(`These the songs in the song list component`, props.songs);
  }, 1000);
  return (
    <div className="cards">
      <Card>
        <CardHeader>{props.songs.artist_name}</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Play Song</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.authReducer.songs
  };
};

export default connect(mapStateToProps, { fetchData })(SongList);
