import React, { Component } from 'react';

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
                {this.state.item.class} <br />
                {this.state.item.length} <br />
                {this.state.item.fee} <br />
                {this.state.item.date} <br />
                {this.state.item.time}
            </li>       
        )
    }
}

export default ClassItem;