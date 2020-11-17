import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {getClasses} from '../../actions/classes';

class Classes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getClasses();
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
    getClasses
})(Classes);