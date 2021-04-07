import { ACTION_TYPES } from '../actions/User'
const initialState = {
    list: []
}
export const users = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {...state, list: [...action.payload] }
        case ACTION_TYPES.FETCH_BY_NAME:
            return {...state, list: [action.payload] }
        default:
            return state;
    }
}