import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ClassItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    render() {
        return (
            <li className="collection-item">
            <Link to={`/classes/edit/${this.state.item.id}`}>
            {this.state.item.class}
            </Link>  
            </li>     
        )
    }
}

export default ClassItem;