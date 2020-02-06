import axios from 'axios';

export const axiosWithAuth = () => {
    console.log(localStorage.getItem("token"));
    return axios.create({
        baseURL: 'https://spotify-song-suggester-5.herokuapp.com/api',
        headers: {
            authorization: localStorage.getItem('token')
        }
    });
};