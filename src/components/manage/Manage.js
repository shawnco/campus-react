import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {getUser} from '../../actions/userActions';
import UserService from '../../services/user.js';

class ConnectedManage extends Component {
    service = new UserService();
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        // get the user's id, then retrieve classes taught by them
        this.props.dispatch(getUser());
        console.log(this.props)
    }

    render() {
        console.log(this.props)
        return (<div className="panel">
            <div className="panel-heading">Classes You Teach</div>
            <div className="panel-body">
                <DataTable value={this.props.majors}>
                    <Column field="name" header="Name" />
                </DataTable>
            </div>
        </div>);
    }
}
const Manage = connect((store) => {
    return store.majors
})(ConnectedManage);
export default Manage;