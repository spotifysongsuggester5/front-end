const initialState = {
    credentials: {
        username: '',
        password: ''
    },
    songs: [],
    token: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH':
        return {
            ...state,
            songs: action.payload
        }
        case 'LOGIN':
        return {
            ...state,
            token: action.payload
        }
        default:
        return state;
    }
}