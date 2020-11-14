import Api from '../api';

export const GET_CLASSES = 'get_classes';
export const GET_BUILDING_CLASSES = 'get_building_classes';

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

export function getBuildingClasses(id) {
    return dispatch => {
        Api.get(`building/${id}/classes`).then(res => {
            return dispatch({
                type: GET_BUILDING_CLASSES,
                payload: res.data
            });
        });
    }
}