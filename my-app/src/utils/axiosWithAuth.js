import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    return axios.create({
        baseURL: 'https://spotify-song-suggester-5.herokuapp.com/api',
        headers: {
            authorization: token
        }
    });
};