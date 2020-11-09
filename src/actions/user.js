import Api from '../api';

export const GET_USER = 'get_user';
export const GET_PAGES = 'get_pages';
export const GET_SECTIONS = 'get_sections';

export function getUser(id) {
    return dispatch => {
        Api.get(`user/${id}`).then(res => {
            dispatch({
                type: GET_USER,
                payload: res.data
            });
        });
    }
}

export function getPages(id) {
    return dispatch => {
        Api.get(`user/${id}/pages`).then(res => {
            dispatch({
                type: GET_PAGES,
                payload: res.data
            });
        });
    }
}

export function getProfessorSections(id) {
    return dispatch => {
        Api.get(`user/${id}/sections`).then(res => {
            dispatch({
                type: GET_SECTIONS,
                payload: res.data
            });
        });
    }
}