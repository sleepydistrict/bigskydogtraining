import React, { Component } from 'react';

class ClientItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    render() {
        return (
          <li className="collection-item">
            {this.state.item.name} <br />
            {this.state.item.pet} <br />
            {this.state.item.pet_age} <br />
            {this.state.item.email} <br />
            {this.state.item.phone}
          </li>
        )
    }
}

export default ClientItem;