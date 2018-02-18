import axios from 'axios';

class FlowchartService {
    api = 'http://localhost:8080/';

    getFlowchart(id) {
        return axios.get(this.api + 'flowchart/' + id);
    }
}
export default FlowchartService;