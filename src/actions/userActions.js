export function fetchUser(user){
    return {
        type: "FETCH_USER",
        payload: user
    };
}

export function getUser(){
    return {
        type: "GET_USER"
    };
}

export function setErrorMsg(msg){
    return {
        type: "SET_ERROR_MSG",
        payload: msg
    };
}

export function getErrorMsg(){
    return {
        type: "GET_ERROR_MSG"
    };
}

export function getProfessorSections(id){
    return {
        type: "GET_PROFESSOR_SECTIONS",
        payload: id
    };
}