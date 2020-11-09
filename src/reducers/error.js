import {GET_ERROR_MSG} from '../actions/error';

const initial = {
    error: ''
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_ERROR_MSG:
            return {...state, error: action.payload};
    }
    return state;
}