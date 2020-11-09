import React, {Component} from 'react';
import './MenuButton.css';
import {Link} from 'react-router-dom';

class MenuButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Link to={this.props.route} key={this.props.index.toString()}>
            <div className='menu-button'>
                {this.props.name}
            </div>
        </Link>
    }
}
export default MenuButton;