import React, { Component } from 'react';
import axios from 'axios';
import ClientItems from './ClientItems';
import {Link} from 'react-router-dom';

class Clients extends Component{
  constructor(){
    super();
    this.state = {
      clients: []
    }
  }

  componentWillMount(){
    this.getClients();
  }

  getClients(){
    axios.get('http://localhost:3000/api/clients')
    .then(response => {
      this.setState({clients: response.data}, () =>
      {
        console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  render(){
    const clientItems = this.state.clients.map((client, i) => {
      return(
        <ClientItems key={client.id} item={client} />
      )
    })
    return(
      <div>
        <h1>Clients</h1>
        <ul className="collection">{clientItems}</ul>
        <div className="fixd-action-btn">
          <Link to="/clients/add" className="btn-floating btn-large red">
            <i className="fa fa-plus"></i>
          </Link>
        </div>  
      </div>  
    )
  }
}

export default Clients;