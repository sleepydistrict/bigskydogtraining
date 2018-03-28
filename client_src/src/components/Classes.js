import React, { Component } from 'react';
import header from './header.jpg';
import axios from 'axios';
import ClassDetails from './ClassDetails';
import puppy_1 from './puppy_1.jpg'
import Coop from './Coop.jpg'
import swal from 'sweetalert';

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
        swal("You're Message Has Been Sent")
      }
    render(){
        console.log(this.state);
        const classDetails = this.state.classes.map((classes, i) => {
            return(
                <ClassDetails key={classes.id} item={classes} />
            )
        })
        return (
            <div className="container-fluid">
                <img className="responsive-img" width="100%" src={header} alt="avy dog approaching a helicopter" />
                        <div className="row">
                            <div className="col s6">
                                <div className="card">
                                    <h4 className="center grey white-text">Classes</h4> 
                                <ul className="collection">{classDetails}</ul>     
                                    <div className="card-image">
                                        <img src={puppy_1} alt="German shepard with infante" />
                                    </div>
                                </div>
                            </div>
                            <div className="col s6 right">
                                <div className="card">
                                <h4 className="center grey white-text">Desciption of Classes</h4>
                                    <h5>New Puppy, Puppy II, and Intermedaite</h5>
                                    Intended to give the owner/handler the education needed to have a successful relationship with their new dog.
                                    Throughout these courses, we will focus on building upon basic behaviors that are critical to safe and effective canine management.
                                    <ol>
                                        <li>Learning to get the behavior you want and how to mark it</li>
                                        <li>Basic behaviors and positions</li>
                                        <li>Settling and calming your dog</li>
                                        <li>Easy walking, free of stress and pulling</li>
                                        <li>Getting your dog’s attention</li>
                                        <li>Appropriate socialization</li>
                                    </ol>
                                <h4 className="center grey white-text">Register For A Class</h4>
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
                                    <div className="input-field">
                                        <input type="text" name="class" ref="class" />
                                        <label htmlFor="class">Class That You Would Like To Take</label>
                                    </div>
                                    <input type="submit" value="Save" className="btn grey" />
                                    </form>   
                                    <div className="card-image">
                                        <img src={Coop} alt="German shepard avalanch dog with ski patrol owner." />
                                    </div>
                                    <div className="card-content">
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