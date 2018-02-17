export default function reducer(state = {
    user: {},
    errorMsg: ''
}, action){
    switch (action.type){
        case "FETCH_USER":
            return {...state, user: action.payload};
        case "GET_USER":
            return state;
        case "FETCH_ERROR_MSG":
            return state;
        case "SET_ERROR_MSG":
            return {...state, errorMsg: action.payload}
        case "GET_PROFESSOR_SECTIONS":
            return {...state, sections: action.payload}
        default:
            return state;
    }
    return state;
}