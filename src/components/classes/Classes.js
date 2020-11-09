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
                <DataTable value={this.props.classes.classes}>
                    <Column field='name' header='Name' />
                </DataTable>
            </div>
        </div>
    }
}

const mapStateToProps = ({classes, user}) => {
    return {
        classes: classes.classes,
        user: user.user
    };
}

export default connect(mapStateToProps, {
    getClasses,
    getUser
})(Classes);