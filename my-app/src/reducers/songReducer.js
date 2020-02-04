const initialState = {
    songs: [],
    newSong: [
        {
            name: '',
            artist: '',
            genre: ''
        }
    ]
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
            newSong: action.payload
        }
        default:
        return state;
    }
}