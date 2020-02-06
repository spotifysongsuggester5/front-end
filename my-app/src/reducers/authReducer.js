const initialState = {
    credentials: {
        username: '',
        password: ''
    },
    savedSongs: []
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                credentials: action.payload
            };
        case 'SAVE':
            return {
                ...state,
                savedSongs: [
                    ...state.savedSongs,
                    action.payload
                ]
            };
        case 'DELETE':
            return {
                ...state,
                savedSongs: state.savedSongs.filter(song => song !== action.payload)
            }
        case 'UPDATE':
            const newList = state.savedSongs.filter(song => song !== action.payload.original);
            return {
                ...state,
                savedSongs: [
                    ...newList,
                    action.payload.updated
                ]

            }
        default:
        return state;
    }
}