import React, {Component} from 'react';
import {connect} from 'react-redux';
import MenuButton from '../menubutton/MenuButton.js';
import './Menu.css';
import {getPages} from '../../actions/user';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Get the pages for this user
        this.props.getPages();
    }

    render() {
        return <div className="col-xs-12 menu">
            {this.state.pages.map((value, index) => {
                return <MenuButton route={value.route} name={value.name} index={value.name} key={index.toString()} />
            })}
        </div>
    }
}

const mapStateToProps = ({user}) => {
    return {
        pages: user.pages
    }
}

export default connect(mapStateToProps, {
    getPages
})(Menu);