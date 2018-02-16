import axios from 'axios';

class BuildingsService {
    api = 'http://localhost:8080/';

    listBuildings() {
        return axios.get(this.api + 'buildings/list');
    }
}
export default BuildingsService;