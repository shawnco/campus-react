import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

class Authenticated extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children, user} = this.props;
        if (!user.username) {
            console.log('gotta log in')
            return <Redirect to='/login' />
        } else {
            console.log('tis ok')
            return children;
        }
    }
}

const mapStateToProps = ({user}) => {
    return {
        user: user.user
    };
}

export default connect(mapStateToProps, null)(Authenticated);