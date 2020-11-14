import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {getLogin} from '../../actions/user';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.updateState = this.updateState.bind(this);
        this.login = this.login.bind(this);
    }

    updateState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login() {
        // do things here
        const {username, password} = this.state;
        this.props.getLogin({username, password});
    }

    render() {
        const {username, password} = this.state;
        const {user} = this.props;
        console.log(user)
        if (user.id) {
            return <Redirect to='/home' />
        } else {
            return <div className="col-xs-12">
                <h1>Login</h1>
                Username: <input
                    name='username'
                    value={username}
                    onChange={this.updateState}
                /><br />
                Password: <input
                    name='password'
                    value={password}
                    onChange={this.updateState}
                /><br />
                <button onClick={this.login}>Log in</button>
            </div>
        }
    }
}

const mapStateToProps = ({user}) => {
    return {
        user: user.user
    };
}

export default connect(mapStateToProps, {getLogin})(Login);