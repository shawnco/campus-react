import React, {Component} from 'react';
import {getErrorMsg} from '../../actions/userActions';
import {connect} from 'react-redux';

class ConnectedAlert extends Component {
    constructor(props) {
        super(props);       
    }

    componentDidMount(){
        this.props.dispatch(getErrorMsg());
        console.log(this.props)
    }

    render() {
        console.log(this.props)
        return <div></div>
    }
}
const Alert = connect((store) => {
    console.log(store)
    return store.user.errorMsg
})(ConnectedAlert);
export default Alert;