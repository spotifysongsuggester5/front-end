const initialState = {
    credentials: {
        username: '',
        password: ''
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH':
        return {
            ...state,
            login: action.payload
        }
        case 'SIGNUP':
        return {
            ...state,
            login: action.payload
        }
        default:
        return state;
    }
}