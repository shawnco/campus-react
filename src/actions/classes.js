import Api from '../api';

export const GET_CLASSES = 'get_classes';

export function getClasses() {
    return dispatch => {
        Api.get(`classes/list`).then(res => {
            return dispatch({
                type: GET_CLASSES,
                payload: res.data
            });
        });
    }    
}