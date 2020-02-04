import axios from 'axios';
import {useEffect} from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchData = () => dispatch => {
    useEffect(() => {
        axiosWithAuth()
            .get('https://spotify-song-suggester-5.herokuapp.com/api/songs')
            .then(res => {
                dispatch({ type: 'FETCH', payload: res.data });
            })
            .catch(err => {
                console.log(err);
            })
    }, [dispatch])
};

export const addSong = () => dispatch => {
    axiosWithAuth()
    .post('https://spotify-song-suggester-5.herokuapp.com/api/songs')
        .then(response => {
            dispatch({ type: 'ADD_SONG', payload: response.data});
        })
        .catch(function (error) {
        console.log(error);
        });
};

