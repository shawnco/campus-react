import Api from '../api';

export const GET_USER = 'get_user';
export const GET_PAGES = 'get_pages';
export const GET_SECTIONS = 'get_sections';
export const GET_LOGIN = 'get_login';

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

export function getPages(level) {
    return dispatch => {
        Api.get(`pages/${level}`).then(res => {
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

export function getLogin(data) {
    return dispatch => {
        Api.get(`login/${data.username}/${data.password}`, data).then(res => {
            dispatch({
                type: GET_LOGIN,
                payload: res.data
            });
        });
    }
}