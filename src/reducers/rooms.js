import {GET_ROOMS, GET_BUILDING_ROOMS} from '../actions/rooms';

const initial = {
    rooms: []
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_ROOMS:
            return {...state, rooms: action.payload};
    }
    return state;
}