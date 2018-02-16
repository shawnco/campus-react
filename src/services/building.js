import axios from 'axios';

class BuildingService {
    api = 'http://localhost:8080/';

    getBuilding(id) {
        return axios.get(this.api + 'building/' + id);
    }

    getClasses(id) {
        return axios.get(this.api + 'building/classes/' + id);
    }

    getRooms(id) {
        return axios.get(this.api + 'rooms/' + id);
    }
}
export default BuildingService;