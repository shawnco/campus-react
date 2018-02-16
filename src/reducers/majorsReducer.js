export default function reducer(state = {
    majors: []
}, action){
    switch (action.type){
        case "FETCH_MAJORS":
            return {...state, majors: action.payload};
        default:
            return state;
    }
    return state;
}