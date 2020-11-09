import {GET_MAJORS} from '../actions/majors';

const initial = {
    majors: []
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_MAJOR:
            return {...state, majors: action.payload};
    }
    return state;
}