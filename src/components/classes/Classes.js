import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import ClassesService from '../../services/classes.js';
import {fetchClasses} from '../../actions/classesActions';
import {getUser} from '../../actions/userActions';

export class ConnectedClasses extends Component {
    service = new ClassesService();
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){

        var that = this;
        this.service.listClasses().then(response => {
            that.props.dispatch(fetchClasses(response.data));
        }); 
        this.props.dispatch(getUser());
    }

    render() {
        // Kick them back to the home page if they don't have the credentials to view
        console.log(this.props.user.user.level)


        return (<div className="panel">
            <div className="panel-heading">Classes</div>
            <div className="panel-body">
                <DataTable value={this.props.classes.classes}>
                    <Column field="name" header="Name" />
                </DataTable>
            </div>
        </div>);
    }
}
const Classes = connect((store) => {
    return {
        classes: store.classes,
        user: store.user
    };
})(ConnectedClasses);
export default Classes;