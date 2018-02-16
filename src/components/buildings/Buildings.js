import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import BuildingsService from '../../services/buildings.js';
import {Link} from 'react-router-dom';


class ConnectedBuildings extends Component {
    service = new BuildingsService();
    constructor(props) {
        super(props);
        this.state = {};
        var that = this;
        this.service.listBuildings().then(response => {
            that.setState({buildings: response.data});
        });
    }

    nameTemplate(row, column) {
        var route = '/building/' + row.id;
        return <Link to={route}>{row.name}</Link>
    }

    render() {
        return (<div className="panel">
            <div className="panel-heading">Buildings</div>
            <div className="panel-body">
                <DataTable value={this.state.buildings}>
                    <Column field="name" header="Name" body={this.nameTemplate} />
                </DataTable>
            </div>
        </div>);
    }
}
const Buildings = connect((store) => {
    return {
        buildings: store.buildings
    };
})(ConnectedBuildings);
export default Buildings;