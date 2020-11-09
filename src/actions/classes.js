export const GET_CLASSES = 'get_classes';

export function getClasses(id) {
    return dispatch => {
        Api.get(`building/${id}/classes`).then(res => {
            return dispatch({
                type: GET_CLASSES,
                payload: res.data
            });
        });
    }    
}