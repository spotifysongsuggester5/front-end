import axios from 'axios';
import {useEffect} from 'react';

export const fetchData = () => dispatch => {
    useEffect(() => {
        axios
            .get('https://spotify-song-suggester-5.herokuapp.com')
                .then(response => {
                    dispatch({ type: 'FETCH', payload: response});
                })
                .catch(error => {
                    console.log(error);
                })
    }, [dispatch]);
};

export const signUp = user => dispatch => {
    axios.post('https://spotify-song-suggester-5.herokuapp.com/register', user)
        .then(response => {
            dispatch({ type: 'SIGNUP', payload: response});
        })
        .catch(function (error) {
        console.log(error);
        });
};