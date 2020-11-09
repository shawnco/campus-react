import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import BuildingsService from '../../services/buildings.js';
import {Link} from 'react-router-dom';

class Buildings extends Component {
    constructor(props) {
        super(props);
    }

    nameTemplate(row, column) {
        const route = `/building/${row.id}`;
        return <Link to={route}>{row.name}</Link>
    }

    render() {
        const {buildings} = this.props;
        return <div className='panel'>
            <div className='panel-heading'>Buildings</div>
            <div className='panel-body'>
                <DataTable value={this.state.buildings}>
                    <Column field='name' header='Name' body={this.nameTemplate} />
                </DataTable>
            </div>
        </div>            
    }
}

const mapStateToProps = ({buildings}) => {
    return {
        buildings: buildings.buildings
    };
}

export default connect(mapStateToProps, null)(Buildings);