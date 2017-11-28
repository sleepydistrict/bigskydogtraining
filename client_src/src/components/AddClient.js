import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddClient extends Component{
  AddClient(newClient){
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/clients',
      data: newClient
    }).then(response => {
      this.props.history.push('/clients');
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
    return (
      <div>
        <br />
        <Link className="btn grey" to ="/clients">Back</Link>
        <h1>Add Client</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
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
            <label htmlFor="phone">Phone Number</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>  
    )
  }
}

export default AddClient;