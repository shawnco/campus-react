import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {getUser} from '../../actions/userActions';
import {fetchSections} from '../../actions/manageActions';
import UserService from '../../services/user.js';
import Section from '../section/Section';
import {Link} from 'react-router-dom';

class ConnectedManage extends Component {
    service = new UserService();
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.dispatch(getUser());
        var level = this.props.user.user.level;
        if(level < 200){
            console.log('get out');
        }else{
            console.log('you can say',this.props.user.user.id);
            var id = this.props.user.user.id;
            var that = this;
            this.service.getProfessorSections(id).then(response => {
                that.props.dispatch(fetchSections(response.data));
            });
        }
    }
    
    nameTemplate(row, column) {
        console.log(row)
        var route = '/section/' + row.section_id;
        return <Link to={route}>{row.name}</Link>
    }

    render() {
        return (<div className="panel">
            <div className="panel-heading">Classes You Teach</div>
            <div className="panel-body">
                {this.renderClasses()}
            </div>
        </div>);
    }

    renderClasses(){
        if(this.props.sections !== undefined){
            return (
                <DataTable value={this.props.sections}>
                    <Column field="name" header="Name" body={this.nameTemplate} />
                    <Column field="code" header="Code" />
                    <Column field="section_letter" header="Section" />
                </DataTable>
            )
        }else{
            return <p></p>;
        }
    }
}
const Manage = connect((store) => {
    console.log('STORE SAYS',store)
    return {
        user: store.user,
        sections: store.manage.sections
    }
})(ConnectedManage);
export default Manage;