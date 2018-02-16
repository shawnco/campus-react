import axios from 'axios';

class ClassesService {
    api = 'http://localhost:8080/';

    listClasses() {
        return axios.get(this.api + 'classes/list');
    }
}
export default ClassesService;