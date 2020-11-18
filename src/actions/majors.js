import Api from '../api';

export const GET_MAJOR = 'get_major';
export const GET_MAJORS = 'get_majors';

export function getMajor(id) {
    return dispatch => {
        Api.get(`major/${id}`).then(res => {
            dispatch({
                type: GET_MAJOR,
                payload: res.data
            });
        });
    }
}

export function getMajors() {
    return dispatch => {
        Api.get('majors/list').then(res => {
            dispatch({
                type: GET_MAJORS,
                payload: res.data
            });
        });
    }
}