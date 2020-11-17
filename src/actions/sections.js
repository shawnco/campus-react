import Api from '../api';

export const FETCH_SECTIONS = 'fetch_sections';
export const GET_SECTIONS = 'get_sections';
export const GET_PROFESSOR_SECTIONS = 'get_professor_sections';

export function getSections(id) {
    return dispatch => {
        Api.get(`class/${id}/sections`).then(res => {
            dispatch({
                type: GET_SECTIONS,
                payload: res.data
            });
        });
    }
}