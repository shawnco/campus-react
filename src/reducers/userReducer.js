export default function reducer(state = {
    user: {}
}, action){
    switch (action.type){
        case "FETCH_USER":
            return {...state, user: action.payload};
        case "GET_USER":
            return state;
        default:
            return state;
    }
    return state;
}