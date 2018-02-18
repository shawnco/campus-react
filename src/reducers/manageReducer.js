export default function reducer(state = {
    sections: []
}, action){
    switch (action.type){
        case "FETCH_SECTIONS":
            console.log('FETCHING SECTIONS')
            return {...state, sections: action.payload};
        case "GET_SECTIONS":
            return state;
        default:
            return state;
    }
    return state;
}