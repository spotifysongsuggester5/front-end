import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchData = () => dispatch => {
    axiosWithAuth()
        .get('/songs')
        .then(response => {
            console.log(response);
            dispatch({ type: 'FETCH', payload: response.data});
        })
        .catch(error => {
            console.log(error);
        })
};

export const addSong = newSong => dispatch => {
    dispatch({ type: 'ADD_SONG'});
    axiosWithAuth()
    .post('/songs', newSong)
        .then(response => {
            axiosWithAuth()
            .get('/songs')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                dispatch({type: 'SUCCESS'})
            })
        })
        .catch(function (error) {
            console.log(error);
        });
};

