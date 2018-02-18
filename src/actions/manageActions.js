export function fetchSections(sections){
    return {
        type: "FETCH_SECTIONS",
        payload: sections
    };
}

export function getSections(){
    return {
        type: "GET_SECTIONS"
    };
}