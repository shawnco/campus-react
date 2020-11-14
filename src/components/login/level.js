import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

class Level extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {threshold, children} = this.props;
        const {level} = this.props.user;
        if (level < threshold) {
            console.log('lol outta here')
            return <Redirect to='/home' />
        } else {
            return children;
        }
    }
}

const mapStateToProps = ({user}) => {
    return {
        user: user.user
    };
}
export default connect(mapStateToProps, null)(Level);