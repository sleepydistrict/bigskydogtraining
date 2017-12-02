import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditClient extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      pet: '',
      pet_age: '',
      email: '',
      phone: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

componentWillMount(){
  this.getClientDetails();
}

  getClientDetails(){
    let clientId = this.props.match.params.id
    axios.get(`http://localhost:3000/api/clients/${clientId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          pet: response.data.pet,
          pet_age: response.data.pet_age,
          email: response.data.email,
          phone: response.data.phone
        }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
    }

  EditClient(newClient){
    axios.request({
      method: 'put',
      url: `http://localhost:3000/api/clients/${this.state.id}`,
      data: newClient
    }).then(response => {
      this.props.history.push('/clients');
    }).catch(err => console.log(err));
  }

  onDelete(){
    let clientId = this.props.match.params.id
    axios.delete(`http://localhost:3000/api/clients/${clientId}`)
      .then(response => {
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
  this.EditClient(newClient);
  e.preventDefault();
}
  
handleInputChange(e){
  const target = e.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

  render(){
    return (
      <div>
        <br />
        <Link className="btn grey" to ="/clients">Back</Link>
        <h1>Edit CLient</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name} 
            onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <input type="text" name="pet" ref="pet" value={this.state.pet}
            onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <input type="text" name="pet_age" ref="pet_age" value={this.state.pet_age} 
            onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <input type="text" name="email" ref="email" value={this.state.email} 
            onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <input type="text" name="phone" ref="phone" value={this.state.phone} 
            onChange={this.handleInputChange} />
          </div>
          <input type="submit" value="Save" className="btn" />
          <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
        </form>
      </div>  
    )
  }
}

export default EditClient;
