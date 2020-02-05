import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchData = () => dispatch => {
    axiosWithAuth()
        .get('/songs')
        .then(res => {
            dispatch({ type: 'FETCH', payload: res.data});
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

export const saveProfile = profile => {
    console.log(profile);
    return {
        type: 'LOGIN',
        payload: profile
    }
}

