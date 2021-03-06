import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {getMajors} from '../../actions/majors';

class Majors extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMajors();
    }

    codeCell(rowData) {
        return <Link to={`/major/${rowData.id}`}>{rowData.code}</Link>
    }

    nameCell(rowData) {
        return <Link to={`/major/${rowData.id}`}>{rowData.name}</Link>
    }

    render() {
        return <div className='panel'>
            <div className='panel-heading'>Majors</div>
            <div className='panel-body'>
                <DataTable value={this.props.majors}>
                    <Column field='code' header='Code' body={this.codeCell} />
                    <Column field='name' header='Name' body={this.nameCell} />
                    <Column field='description' header='Description' />
                </DataTable>
            </div>
        </div>
    }
}

const mapStateToProps = ({majors}) => {
    return {
        majors: majors.majors
    };
}

export default connect(mapStateToProps, {
    getMajors
})(Majors);