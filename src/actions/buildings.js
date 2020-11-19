import Api from '../api';

export const GET_BUILDING = 'get_building';
export const GET_BUILDINGS = 'get_buildings';

export function getBuilding(id) {
    return dispatch => {
        Api.get(`building/${id}`).then(res => {
            return dispatch({
                type: GET_BUILDING,
                payload: res.data
            });
        });
    }
}

export function getBuildings() {
    return dispatch => {
        Api.get('building/list').then(res => {
            return dispatch({
                type: GET_BUILDINGS,
                payload: res.data
            });
        });
    }
}