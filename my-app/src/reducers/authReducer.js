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
            credentials: action.payload
        }
        case 'SAVE':
            return {
                ...state,
                savedSongs: [
                    ...state.savedSongs,
                    action.payload
                ]
            }
        default:
        return state;
    }
}