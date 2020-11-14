import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {getClasses} from '../../actions/classes';
import {getUser} from '../../actions/user';

class Classes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getClasses();
    }

    render() {
        return <div className='panel'>
            <div className='panel-heading'>Classes</div>
            <div className='panel-body'>
                <DataTable value={this.props.classes}>
                    <Column field='name' header='Name' />
                    <Column field='code' header='Code' />
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