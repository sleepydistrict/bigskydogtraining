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
            <li className="collection-item black">
                <label><h5>Class:</h5>{this.state.item.class} (Age Range of Your Pup)</label><br />
                <label><h6>Length of Class:</h6> {this.state.item.length}</label> <br />
                <label><h6>Fee:</h6> {this.state.item.fee}</label> <br />
                <label><h6>Dates:</h6> {this.state.item.date}</label> <br />
                <label><h6>Time:</h6> {this.state.item.time}</label>
            </li>       
        )
    }
}

export default ClassItem;