import axios from 'axios';
import {useEffect} from 'react';

export const fetchData = props => dispatch => {
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
    axios.post('https://spotify-song-suggester-5.herokuapp.com/api/auth/login', user)
        .then(response => {
            dispatch({ type: 'LOGIN', payload: response.data.token});
        })
        .catch(function (error) {
        console.log(error);
        });
};