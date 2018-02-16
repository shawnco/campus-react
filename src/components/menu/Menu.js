import React, {Component} from 'react';
import MenuButton from '../menubutton/MenuButton.js';
import './Menu.css';
import UserService from '../../services/user.js';

class Menu extends Component {
    service = new UserService();
    constructor(props) {
        super(props);
        this.state = {
            pages: []
        };
    }

    componentDidMount() {
        // Get the pages for this user
        var that = this;
        this.service.getPages(this.props.level).then(response => {
            that.setState({pages: response.data});
        });
    }

    render() {
        return (
            <div className="col-xs-12 menu">
                {this.state.pages.map((value, index) => {
                    return <MenuButton route={value.route} name={value.name} index={value.name} key={index.toString()} />
                })}
            </div>
        )
    }
}
export default Menu;