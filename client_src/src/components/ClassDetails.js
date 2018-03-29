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
           <label><h5>Class: </h5>{this.state.item.class}</label><br />
           <label><h5>Age Range Of Dog: </h5>{this.state.item.age_range}</label><br />
           <label><h5>Length of Class: </h5> {this.state.item.length}</label> <br />
           <label><h5>Fee: </h5> {this.state.item.fee}</label> <br />
           <label><h5>Dates: </h5> {this.state.item.date}</label> <br />
           <label><h5>Time: </h5> {this.state.item.time}</label>

            </li>     
        )
    }
}

export default ClassDetails;