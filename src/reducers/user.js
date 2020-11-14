import {
    GET_USER,
    GET_PAGES,
    GET_SECTIONS,
    GET_LOGIN
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
        case GET_LOGIN:
            return {...state, user: action.payload};
    }
    return state;
}