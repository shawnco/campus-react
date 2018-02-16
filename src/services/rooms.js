import axios from 'axios';

class RoomsService {
    api = 'http://localhost:8080/';

    listMajors() {
        return axios.get(this.api + 'rooms/list');
    }
}
export default MajorsService;