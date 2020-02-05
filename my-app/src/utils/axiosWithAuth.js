import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://spotify-song-suggester-5.herokuapp.com/api',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
};