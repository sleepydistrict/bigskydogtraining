import React, { Component } from 'react';
import header from './header.jpg';
import axios from 'axios';
import ClassItem from './ClassItem';

class Classes extends Component{
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
                <img className="responsive-img" width="100%" src={header} alt="avy dog approaching a helicopter" />
                <h1>Classes</h1> 
                <ul className="collection">{classItems}</ul>     
            </div>    
        )
    }
}

export default Classes;