import Api from '../api';

export const GET_MAJORS = 'get_majors';

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