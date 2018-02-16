import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import MajorsService from '../../services/majors.js';
import {fetchMajors} from '../../actions/majorsActions';

class ConnectedMajors extends Component {
    service = new MajorsService();
    constructor(props) {
        super(props);
        this.state = {
            majors: []
        }
        var that = this;
        that.service.listMajors().then(response => {
            that.props.dispatch(fetchMajors(response.data));
        });
    }

    render() {
        return (<div className="panel">
            <div className="panel-heading">Majors</div>
            <div className="panel-body">
                <DataTable value={this.props.majors}>
                    <Column field="name" header="Name" />
                </DataTable>
            </div>
        </div>);
    }
}
const Majors = connect((store) => {
    store.majors
})(ConnectedMajors);
export default Majors;