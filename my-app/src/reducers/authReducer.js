const initialState = {
    login: {
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
        default:
        return state;
    }
}