import axios from 'axios';

class MajorsService {
    api = 'http://localhost:8080/';

    listMajors() {
        return axios.get(this.api + 'majors/list');
    }
}
export default MajorsService;