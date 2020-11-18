import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import _ from 'lodash';
import {getMajorClasses} from '../../actions/classes';

class Major extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = _.get(this.props, 'match.params.id', null);
        if (id) {
            this.props.getMajorClasses(id);
        }
    }

    codeCell(rowData) {
        return <Link to={`/class/${rowData.id}`}>{rowData.code}</Link>
    }

    nameCell(rowData) {
        return <Link to={`/class/${rowData.id}`}>{rowData.name}</Link>
    }

    render() {
        return <div className='panel'>
            <div className='panel-heading'>Classes</div>
            <div className='panel-body'>
                <DataTable value={this.props.classes}>
                    <Column field='code' header='Code' body={this.codeCell} />
                    <Column field='name' header='Name' body={this.nameCell} />
                </DataTable>
            </div>
        </div>
    }
}

const mapStateToProps = ({classes}) => {
    return {
        classes: classes.classes
    };
}

export default connect(mapStateToProps, {
    getMajorClasses
})(Major);