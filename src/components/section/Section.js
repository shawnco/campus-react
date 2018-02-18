import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';

class ConnectedSection extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
    }

    render() {
        return (<div className="panel">I AM A SECTION
        </div>);
    }
}
const Section = connect((store) => {
    console.log('STORE SAYS',store)
    return {
        user: store.user,
        sections: store.manage.sections
    }
})(ConnectedSection);
export default Section;