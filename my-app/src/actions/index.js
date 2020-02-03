import axios from 'axios';
import {useEffect} from 'react';

export const fetchData = () => dispatch => {
    useEffect(() => {
        axios
            .get('https://spotify-song-suggester-5.herokuapp.com')
                .then(response => {
                    dispatch({ type: 'FETCH', payload: response.data});
                })
    }, [dispatch]);
};