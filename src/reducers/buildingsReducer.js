export default function reducer(state = {
    building: null,
    buildings: [],
    classes: [],
    rooms: []
}, action){
    switch (action.type){
        case "FETCH_BUILDING":
            return {...state, building: action.payload};
        case "FETCH_BUILDINGS":
            return {...state, buildings: action.payload};
        case "FETCH_CLASSES":
            return {...state, classes: action.payload};
        case "FETCH_ROOMS":
            return {...state, rooms: action.payload};
        default:
            return state;
    }
    return state;
}