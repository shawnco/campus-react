import {GET_SECTIONS} from '../actions/sections';

const initial = {
    sections: []
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_SECTIONS:
            return {...state, sections: action.payload};
    };
    return state;
}