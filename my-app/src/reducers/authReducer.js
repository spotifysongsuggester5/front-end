const initialState = {
    credentials: {
        username: '',
        password: ''
    },
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
        return {
            credentials: action.payload
        }
        default:
        return state;
    }
}