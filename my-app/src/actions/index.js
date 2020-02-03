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

export const signUp = user => dispatch => {
    axios.post('https://spotify-song-suggester-5.herokuapp.com/register', user)
        .then(response => {
            dispatch({ type: 'SIGNUP', payload: response});
        })
        .catch(function (error) {
        console.log(error);
        });
};