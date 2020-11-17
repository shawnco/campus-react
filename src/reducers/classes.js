import {GET_CLASSES, GET_BUILDING_CLASSES, GET_MAJOR_CLASSES} from '../actions/classes';

const initial = {
    classes: []
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_CLASSES:
            return {...state, classes: action.payload};
        case GET_BUILDING_CLASSES:
            return {...state, classes: action.payload};
        case GET_MAJOR_CLASSES:
            return {...state, classes: action.payload};
    }
    return state;
}