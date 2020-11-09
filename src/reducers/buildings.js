import {GET_BUILDING, GET_BUILDINGS} from '../actions/buildings';

const initial = {
    building: {},
    buildings: []
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_BUILDING:
            return {...state, building: action.payload};
        case GET_BUILDINGS:
            return {...state, buildings: action.payload};
    }
    return state;
}