import React, {Component} from 'react';
import {connect} from 'react-redux';

class ConnectedFlowchart extends Component {
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