const initialState = {
    songs: [],
    newSong: [
        {
            song_name: '',
            artist_name: '',
            genre: ''
        }
    ],
    isLoading: false
}

export const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH':
        return {
            ...state,
            songs: action.payload
        }
        case 'ADD_SONG':
        return {
            ...state,
            isLoading: true
        }
        case 'SUCCESS':
        return {
            ...state,
            isLoading: false
        }
        default:
        return state;
    }
}
