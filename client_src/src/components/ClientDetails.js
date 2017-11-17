import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ClientDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details: ''
    }
  }

  componentWillMount(){
    this.getClients();
  }

  getClients(){
    let clientId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/clients/${clientId}`)
    .then(response => {
      this.setState({details: response.data}, () =>
      {
        console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        <br />
        <Link className="btn grey" to="/clients">Back</Link>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item">Name: {this.state.details.name}</li>
          <li className="collection-item">Pets Name: {this.state.details.pet_name}</li>
          <li className="collection-item">Pets Age: {this.state.details.pet_age}</li>
          <li className="collection-item">Email: {this.state.details.email}</li>
          <li className="collection-item">Phone: {this.state.details.phone}</li>
        </ul>
        <Link className="btn grey" to={`/clients/edit/${this.state.details.id}`}>Edit</Link>
        <button className="btn red right">Delete</button>  
      </div>      
    )
  }
}

export default ClientDetails;