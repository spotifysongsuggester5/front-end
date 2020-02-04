import axios from 'axios';
import {useEffect} from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchData = () => dispatch => {
    useEffect(() => {
        axiosWithAuth()
            .get('https://spotify-song-suggester-5.herokuapp.com/')
            .then(res => {
                dispatch({ type: 'FETCH', payload: res.data });
            })
            .catch(err => {
                console.log(err);
            })
    }, [dispatch])
};

export const login = user => dispatch => {
    axios
    .post('https://spotify-song-suggester-5.herokuapp.com/api/auth/login', user)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            dispatch({ type: 'LOGIN', payload: response.data.token});
        })
        .catch(function (error) {
        console.log(error);
        });
};

export const addSong = song => dispatch => {
    axiosWithAuth()
    .post('https://spotify-song-suggester-5.herokuapp.com/api/songs', song)
        .then(response => {
            dispatch({ type: 'ADD_SONG', payload: response.data});
        })
        .catch(function (error) {
        console.log(error);
        });
};

