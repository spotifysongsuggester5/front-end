const initialState = {
    credentials: {
        username: '',
        password: ''
    },
    token: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
        return {
            ...state,
            token: action.payload
        }
        default:
        return state;
    }
}