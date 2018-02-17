import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Classes from './components/classes/Classes';
import Majors from './components/majors/Majors';
import Home from './components/home/Home';
import Buildings from './components/buildings/Buildings';
import Building from './components/building/Building';
import Alert from './components/alert/Alert';
import UserService from './services/user.js';
import {fetchUser} from './actions/userActions';

class ConnectedApp extends Component {
    service = new UserService();
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var that = this;
        this.service.getUser(2).then(response => {
            that.props.dispatch(fetchUser(response.data));
        });
    }


    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <Header />
                        </div>
                        {this.makeMenu()}
                        <div className="col-xs-12">
                            <Alert />
                        </div>
                        <div className="col-xs-12">
                            <Route path="/home" component={Home} />
                            <Route path="/classes" component={Classes} />
                            <Route path="/majors" component={Majors} />
                            <Route path="/buildings" component={Buildings} />
                            <Route path="/building/:id" component={Building} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    makeMenu() {
        if(this.props.user){
            return <Menu level={this.props.user.level} />
        }
    }

    loadRoutes() {
        if(this.state.user){

        }
    }
}
const App = withRouter(connect((store) => {
    return store.user;
})(ConnectedApp));
export default App;