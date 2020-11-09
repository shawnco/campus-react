import Api from '../api';

export const GET_ROOMS = 'get_rooms';

export function getRooms(id) {
    return dispatch => {
        Api.get(`building/${id}/rooms`).then(res => {
            return dispatch({
                type: GET_ROOMS,
                payload: res.data
            });
        });
    }   
}