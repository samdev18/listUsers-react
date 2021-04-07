import api from './api';

export const ACTION_TYPES = {
    FETCH_ALL: 'FETCH_ALL',
    FETCH_BY_NAME: 'FETCH_BY_NAME'
}
export const fetchAll = () => dispatch => {
    api.test('').fetchAll().then(res => {
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: res.data
        })
    }).catch(err => console.log(err))
}
export const fetchByName = (name) => dispatch => {
    api.test('search/').fetchByName(name).then(res => {
        dispatch({
            type: ACTION_TYPES.FETCH_BY_NAME,
            payload: res.data
        })
    }).catch(err => console.log(err))
}