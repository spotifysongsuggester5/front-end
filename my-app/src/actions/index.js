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

export const saveProfile = profile => {
    console.log(profile);
    return {
        type: 'LOGIN',
        payload: profile
    };
};

export const deleteSong = song => {
    console.log(song);
    return {
        type: 'DELETE',
        payload: song
    };
};

// export const deleteSong = song => dispatch => {
//     console.log(song);
//     axiosWithAuth()
//         .delete(`/songs/${song.id}`)
//         .then(response => {
//             console.log(response);
//             fetchData();
//         })
//         .catch(error => {
//             console.log(error);
//         })
// };

export const saveSong = song => {
    console.log(song);
    return {
        type: 'SAVE',
        payload: song
    }
};

// export const saveSong = song => {
//     console.log(song);
//     axiosWithAuth()
//         .post(`/songs/`, song)
//         .then(response => {
//             console.log(response);
//             fetchData();
//         })
//         .catch(error => {
//             console.log(error);
//         })
// };

export const updateSong = songs => {
    console.log(songs); // songs = { original: '', updated: ''}
    return {
        type: 'UPDATE',
        payload: songs
    };
};

// export const updateSong = song => {
//     console.log(song);
//     axiosWithAuth()
//         .put(``, song)
//         .then(response => {
//             console.log(response);
//             fetchData();
//         })
//         .catch(error => {
//             console.log(error);
//         })
// };