import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import _ from 'lodash';
import {getBuilding} from '../../actions/buildings';
import {getBuildingClasses} from '../../actions/classes';
import {getBuildingRooms} from '../../actions/rooms';

class Building extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = _.get(this.props, 'match.params.id', null);
        if (id) {
            this.props.getBuilding(id);
            this.props.getBuildingClasses(id);
            this.props.getBuildingRooms(id);
        }
    }

    renderRoomTable() {
        if(this.props.rooms){
            return <div className="panel">
                <div className="panel-heading">{_.get(this.props, 'building.name', '')}</div>
                <div className="panel-body">
                    <DataTable value={this.props.rooms}>
                        <Column field="number" header="Number" />
                        <Column field="capacity" header="Capacity" />
                    </DataTable>
                </div>
            </div>
        }        
    }

    renderClassesTable() {
        if(this.props.classes){
            return <div className="panel">
                <div className="panel-heading">Classes</div>
                <div className="panel-body">
                    <DataTable value={this.props.classes}>
                        <Column field="name" header="Name" />
                    </DataTable>
                </div>
            </div>
        }
    }

    render() {
        console.log(this.props)
        return <div>
            {this.renderRoomTable()}
            {this.renderClassesTable()}
        </div>
    }
}

const mapStateToProps = ({buildings, classes, rooms}) => {
    return {
        building: buildings.building,
        classes: classes.classes,
        rooms: rooms.rooms

    };
}

export default connect(mapStateToProps, {
    getBuilding,
    getBuildingClasses,
    getBuildingRooms
})(Building);