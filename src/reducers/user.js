import {
    GET_USER,
    GET_PAGES,
    GET_SECTIONS
} from '../actions/user';

const initial = {
    user: {},
    pages: [],
    sections: []
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_USER:
            return {...state, user: action.payload};
        case GET_PAGES:
            return {...state, pages: action.payload};
        case GET_SECTIONS:
            return {...state, sections: action.payload};
    }
    return state;
}