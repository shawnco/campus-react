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
        const {user} = this.props;
        this.props.getPages(user.lavel);
    }

    render() {
        const {pages} = this.props;
        return <div className="col-xs-12 menu">
            {pages.map((value, index) => {
                return <MenuButton route={value.route} name={value.name} index={value.name} key={index.toString()} />
            })}
        </div>
    }
}

const mapStateToProps = ({user}) => {
    return {
        user: user.user,
        pages: user.pages
    }
}

export default connect(mapStateToProps, {
    getPages
})(Menu);