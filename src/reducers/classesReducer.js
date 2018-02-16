export default function reducer(state = {
    classes: []
}, action){
    switch (action.type){
        case "FETCH_CLASSES":
            return {...state, classes: action.payload};
            break;
        default:
            return state;
    }
    return state;
}