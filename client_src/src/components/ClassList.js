import React, { Component } from 'react';
import axios from 'axios';
import ClassItem from './ClassItem';
import { Link } from 'react-router-dom';


class ClassList extends Component{
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
        const classItems = this.state.classes.map((classes, i) => {
            return(
                <ClassItem key={classes.id} item={classes} />
            )
        })
        return (
            <div className="container-fluid">
                <Link className="btn grey" to ="/admin">Back</Link>
                <h1>Classes</h1> 
                <ul className="collection">{classItems}</ul>  
   
                <Link to="/classes/add" className="btn-floating btn-large red">
                    <i className="fa fa-plus"></i>
                </Link>
            </div>    
        )
    }
}

export default ClassList;