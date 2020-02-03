import axios from 'axios';
import {useEffect} from 'react';

export const fetchData = () => dispatch => {
    useEffect(() => {
        axios
            .get('https://spotify-song-suggester-5.herokuapp.com')
            .then(res => {
                console.log(res);
                dispatch({ type: 'FETCH', payload: res.data });
            })
            .catch(err => {
                console.log(err);
            })
    }, [dispatch])
};

export const login = user => dispatch => {
    axios.post('https://spotify-song-suggester-5.herokuapp.com/login', user)
        .then(response => {
            dispatch({ type: 'LOGIN', payload: response});
        })
        .catch(function (error) {
        console.log(error);
        });
};