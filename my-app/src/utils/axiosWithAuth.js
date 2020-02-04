import axios from 'axios';

export const axiosWithAuth = props => {
    return axios.create({
        baseURL: 'https://spotify-song-suggester-5.herokuapp.com',
        headers: {
            Authorization: props.token
        }
    });
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token
    }
}

export default connect(
    mapStateToProps,
    {}
)(axiosWithAuth);