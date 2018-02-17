import axios from 'axios';

class UserService {
    api = 'http://localhost:8080/';

    getPages(level) {
        return axios.get(this.api + 'pages/' + level);
    }

    getUser(id) {
        return axios.get(this.api + 'user/' + id);
    }

    getProfessorSections(id){
        return axios.get(this.api + 'professor/sections/' + id);
    }
}
export default UserService;