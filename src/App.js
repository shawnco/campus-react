import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Classes from './components/classes/Classes';
import Majors from './components/majors/Majors';
// import Manage from './components/manage/Manage';
import Home from './components/home/Home';
import Buildings from './components/buildings/Buildings';
// import Building from './components/building/Building';
import Section from './components/section/Section';
import Flowchart from './components/flowchart/Flowchart';
import {getUser} from './actions/user';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUser(1);
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
                        </div>
                        <div className="col-xs-12">
                            <Route path="/home" component={Home} />
                            <Route path="/classes" component={Classes} />
                            <Route path="/majors" component={Majors} />
                            <Route path="/buildings" component={Buildings} />
                            {/* <Route path="/building/:id" component={Building} /> */}
                            {/* <Route path="/manage" component={Manage} /> */}
                            <Route path="/section/:id" component={Section} />
                            <Route path="/flowchart" component={Flowchart} />
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

const mapStateToProps = ({user}) => {
    return {
        user: user.user
    }
};

export default connect(mapStateToProps, {getUser})(App);