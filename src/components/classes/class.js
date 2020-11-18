import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {getClass} from '../../actions/classes';
import {getSections} from '../../actions/sections';

class Class extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = _.get(this.props, 'match.params.id', null);
        if (id) {
            this.props.getSections(id);
            this.props.getClass(id);
        }
    }

    sectionCell(rowData) {
        return <Fragment>{rowData.section_letter}</Fragment>
    }

    locationCell(rowData) {
        return <Fragment>{rowData.name} {rowData.number}</Fragment>
    }

    render() {
        return <div className='panel'>
            <div className='panel-heading'>{_.get(this.props, 'class.name', '')}</div>
            <div className='panel-body'>
                <DataTable value={this.props.sections}>
                    <Column field='section' header='Section' body={this.sectionCell} />
                    <Column field='location' header='Location' body={this.locationCell} />
                </DataTable>
            </div>
        </div>        
    }
}

const mapStateToProps = ({classes, sections}) => {
    return {
        class: classes.class,
        sections: sections.sections
    };
}

export default connect(mapStateToProps, {getClass, getSections})(Class);