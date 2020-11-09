import {GET_CLASSES} from '../actions/classes';

const initial = {
    classes: []
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_CLASSES:
            return {...state, classes: action.payload};
    }
    return state;
}