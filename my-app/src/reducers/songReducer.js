const initialState = {
    songs: [],
}

export const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH':
        return {
            ...state,
            songs: action.payload
        }
        default:
        return state;
    }
}