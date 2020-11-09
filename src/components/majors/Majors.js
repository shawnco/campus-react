import React, {Component} from 'react';
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

    render() {
        return <div className='panel'>
            <div className='panel-heading'>Majors</div>
            <div className='panel-body'>
                <DataTable value={this.props.majors}>
                    <Column field='name' header='Name' />
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