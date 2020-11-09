import React, {Component} from 'react';
import {connect} from 'react-redux';

class Alert extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {errorMsg} = this.props;
        return <div>{errorMsg}</div>
    }
}

const mapStateToProps = ({error}) => {
    return {
        errorMsg: error.errorMsg
    }
}

export default connect(mapStateToProps, null)(Alert);