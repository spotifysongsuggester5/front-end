import {useEffect} from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchData = () => dispatch => {
    axiosWithAuth()
        .get('/songs')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
};

export const addSong = () => dispatch => {
    axiosWithAuth()
    .post('/songs')
        .then(response => {
            dispatch({ type: 'ADD_SONG', payload: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
};

