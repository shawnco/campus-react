import {GET_CLASS, GET_CLASSES, GET_BUILDING_CLASSES, GET_MAJOR_CLASSES} from '../actions/classes';

const initial = {
    classes: [],
    class: {}
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_CLASS:
            return {...state, class: action.payload}
        case GET_CLASSES:
            return {...state, classes: action.payload};
        case GET_BUILDING_CLASSES:
            return {...state, classes: action.payload};
        case GET_MAJOR_CLASSES:
            return {...state, classes: action.payload};
    }
    return state;
}