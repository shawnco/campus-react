import {GET_MAJOR, GET_MAJORS} from '../actions/majors';

const initial = {
    majors: [],
    major: {}
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_MAJOR:
            return {...state, major: action.payload};
        case GET_MAJORS:
            return {...state, majors: action.payload};
    }
    return state;
}