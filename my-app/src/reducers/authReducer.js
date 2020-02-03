const initialState = {
    credentials: {
        username: 'Hello',
        password: ''
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH':
        return {
            ...state,
            credentials: action.payload
        }
        case 'LOGIN':
        return {
            ...state,
            login: action.payload
        }
        default:
        return state;
    }
}