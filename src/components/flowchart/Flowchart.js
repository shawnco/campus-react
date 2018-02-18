import React, {Component} from 'react';
import {connect} from 'react-redux';
import FlowchartService from '../../services/flowchart.js';

class ConnectedFlowchart extends Component {
    service = new FlowchartService();
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.service.getFlowchart(1).then(response => {
            console.log(response.data);
        })
    }

    render() {
        return (<div className="panel">I AM A FLOWCHART
        </div>);
    }
}
const Flowchart = connect((store) => {
    console.log('STORE SAYS',store)
    return store;
})(ConnectedFlowchart);
export default Flowchart;