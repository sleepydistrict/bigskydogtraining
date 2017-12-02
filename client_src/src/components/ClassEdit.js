import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClassItem from './ClassItem';

class ClassEdit extends Component{
    constructor(){
        super();
        this.state = {
            classes: []
        }
    }
 
    componentWillMount(){
        this.getClasses();
    }

    getClasses(){
        axios.get('http://localhost:3000/api/classes')
        .then(response => {
            this.setState({classes: response.data}, () => {
                // console.log(this.state);
            });
        }) 
        .catch(err => console.log(err));   
    }


    render(){
        console.log(this.state);
        const classItems = this.state.classes.map((classes, i) => {
            return(
                <ClassItem key={classes.id} item={classes} />
            )
        })
        return (
            <div className="container-fluid">
                <Link className="btn grey" to ="/admin">Back</Link>
                <h1>Edit Classes</h1> 
                <ul className="collection">{classItems}</ul>     
            </div>    
        )
    }
}

export default ClassEdit;