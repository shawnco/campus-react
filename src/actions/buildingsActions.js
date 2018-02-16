export function fetchBuilding(building){
    return {
        type: "FETCH_BUILDING",
        payload: building
    };
}

export function fetchBuildings(buildings){
    return {
        type: "FETCH_BUILDINGS",
        payload: buildings
    };
}

export function fetchClasses(classes){
    return {
        type: "FETCH_CLASSES",
        payload: classes
    };
}

export function fetchRooms(rooms){
    return {
        type: "FETCH_ROOMS",
        payload: rooms
    };
}