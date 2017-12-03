import React, { Component } from 'react';

class ClassDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    render() {
        return (
            <li className="collection-item black">
           <label><h6>Class: </h6>{this.state.item.class}</label><br />
           <label><h6>Age Range Of Dog: </h6>{this.state.item.age_range}</label><br />
           <label><h6>Length of Class: </h6> {this.state.item.length}</label> <br />
           <label><h6>Fee: </h6> {this.state.item.fee}</label> <br />
           <label><h6>Dates: </h6> {this.state.item.date}</label> <br />
           <label><h6>Time: </h6> {this.state.item.time}</label>

            </li>     
        )
    }
}

export default ClassDetails;