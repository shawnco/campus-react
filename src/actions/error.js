export const GET_ERROR_MSG = 'get_error_msg';

export function setErrorMsg(msg) {
    dispatch => {
        return dispatch({
            type: GET_ERROR_MSG,
            payload: msg
        });
    }
}