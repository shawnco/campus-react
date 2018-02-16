export function fetchUser(user){
    return {
        type: "FETCH_USER",
        payload: user
    };
}

export function getUser(){
    return {
        type: "GET_USER",
        payload: {}
    }
}