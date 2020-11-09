import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {Redirect} from 'react-router';
import {getBuilding} from '../../actions/buildings';
import {getClasses} from '../../actions/classes';
import {getRooms} from '../../actions/rooms';
import {setErrorMsg} from '../../actions/error';
import {getUser} from '../../actions/user';

class Building extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const level = _.get(this.props, 'user.user.level', 0);
        const id = _.get(this.props, 'match.params.id', null);
        if (level < 300) {
            this.props.getBuilding(id);
            this.props.getClasses(id);
            this.props.getRooms(id);
        }
        this.props.getUser()
    }

    renderName() {
        if (this.props.building) {
            return this.props.building.name;
        } else {
            return null;
        }
    }

    renderRoomTable() {
        if (this.props.rooms) {
            return <div className='panel'>
                <div className='panel-heading'>{this.renderName()}</div>
                <div className='panel-body'>
                    <DataTable value={this.props.rooms}>
                        <Column field='number' header='Number' />
                        <Column field='capacity' header='Capacity' />
                    </DataTable>
                </div>
            </div>
        } else {
            return null;
        }
    }

    renderClassesTable() {
        if (this.props.classes) {
            return <div className='panel'>
                <div className='panel-heading'>Classes</div>
                <div className='panel-body'>
                    <DataTable value={this.props.classes}>
                        <Column field='name' header='Name' />
                    </DataTable>
                </div>
            </div>
        } else {
            return null;
        }
    }

    render() {
        const level = _.get(this.props, 'user.user.level', 0);
        if (level) {
            return <div>
                {this.renderRoomTable()}
                {this.renderClassesTable()}
            </div>
        } else {
            return <Redirect to='/home' />
        }
    }   
}

const mapStateToProps = ({buildings, classes, rooms}) => {
    return {
        building: buildings.building,
        classes: classes.classes,
        rooms: rooms.rooms,
        user: user
    }
}

export default connect(mapStateToProps, { 
    getBuilding,
    getClasses,
    getRooms,
    setErrorMsg
})(Building);