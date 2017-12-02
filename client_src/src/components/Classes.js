import React, { Component } from 'react';
import header from './header.jpg';
import axios from 'axios';
import ClassItem from './ClassItem';
import puppy_1 from './puppy_1.jpg'
import Coop from './Coop.jpg'


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

    AddClient(newClient){
        axios.request({
          method: 'post',
          url: 'http://localhost:3000/api/clients',
          data: newClient
        }).then(response => {
          this.props.history.push('/');
        }).catch(err => console.log(err));
      }
    
      onSubmit(e){
        const newClient = {
          name: this.refs.name.value,
          pet: this.refs.pet.value,
          pet_age: this.refs.pet_age.value,
          email: this.refs.email.value,
          phone: this.refs.phone.value
        }
        this.AddClient(newClient);
        e.preventDefault();
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
                    <h1 className="center grey white-text">Classes</h1> 
                        <div className="row">
                            <div className="col s6">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={puppy_1} alt="German shepard with infante" />
                                    </div>
                                <ul className="collection">{classItems}</ul>     
                                </div>
                            </div>
                            <div className="col s6 right">
                                <div className="card"><h4 className="center grey">Register For A Class</h4>
                                <form onSubmit={this.onSubmit.bind(this)}>
                                    <div className="input-field">
                                        <input type="text" name="name" ref="name" />
                                        <label htmlFor="name">Owners Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" name="pet" ref="pet" />
                                        <label htmlFor="pet">Pets Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" name="pet_age" ref="pet_age" />
                                        <label htmlFor="pet_age">Pets Age</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" name="email" ref="email" />
                                        <label htmlFor="email">Email Address</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" name="phone" ref="phone" />
                                        <label htmlFor="phone">Phone Number (optional)</label>
                                    </div>
                                    <input type="submit" value="Save" className="btn grey" />
                                    </form>   
                                    <div className="card-image">
                                        <img src={Coop} alt="German shepard avalanch dog with ski patrol owner." />
                                    </div>
                                    <div class="card-content">
                                        <p>Contact: Kristen Cooper @ Big Sky Dog Training <br/>
                                        Phone: 612 508 5413<br/>
                                        If you have any questions, please email us @ <a href="mailto:kcoopa4@gmail.com">kcoopa4@gmail.com</a><br/>
                                        Copyright 2017
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}

export default Classes;