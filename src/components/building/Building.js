import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import BuildingService from '../../services/building.js';
import {fetchBuilding, fetchClasses, fetchRooms} from '../../actions/buildingsActions';
import {getUser} from '../../actions/userActions';
import {Redirect} from 'react-router';

class ConnectedBuilding extends Component {
    service = new BuildingService();
    constructor(props) {
        super(props);
        console.log('hi?')
        var that = this;        
    }
    
    componentWillMount(){
        var that = this;
        this.service.getBuilding(this.props.match.params.id).then(response => {
            that.props.dispatch(fetchBuilding(response.data));
        });
        this.service.getClasses(this.props.match.params.id).then(response => {
            that.props.dispatch(fetchClasses(response.data));
        });
        this.service.getRooms(this.props.match.params.id).then(response => {
            that.props.dispatch(fetchRooms(response.data));
        });
        this.props.dispatch(getUser());
    }

    renderName(){
        if(this.props.building){
            return this.props.building.name;
        }
    }

    renderRoomTable(){
        if(this.props.rooms){
            return (
                <div className="panel">
                    <div className="panel-heading">{this.renderName()}</div>
                    <div className="panel-body">
                        <DataTable value={this.props.rooms}>
                            <Column field="number" header="Number" />
                            <Column field="capacity" header="Capacity" />
                        </DataTable>
                    </div>
                </div>
            )
        }
    }

    renderClassesTable(){
        if(this.props.classes){
            return (
                <div className="panel">
                    <div className="panel-heading">Classes</div>
                    <div className="panel-body">
                        <DataTable value={this.props.classes}>
                            <Column field="name" header="Name" />
                        </DataTable>
                    </div>
                </div>
            );
        }
    }

    render() {
        console.log(this.props.user.user)
        if(this.props.user.user.level){
            // If the level is below 300, kick them out
            var level = this.props.user.user.level;
            if(level < 300){
                return <Redirect to="/home"></Redirect>
            }else{
                return (
                    <div>
                        {this.renderRoomTable()}
                        {this.renderClassesTable()}
                    </div>
                );
            }
        }else{
            return <div></div>;
        }


    }
}
const Building = connect((store) => {
    return {
        building: store.buildings.building,
        classes: store.buildings.classes,
        rooms: store.buildings.rooms,
        user: store.user
    };
})(ConnectedBuilding);
export default Building;