import React, { Component } from 'react';
import axios from 'axios';
import ClientItem from './ClientItem';
import { Link } from 'react-router-dom';


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
            this.setState({clients: response.data}, () => {
                // console.log(this.state);
            });
        }) 
        .catch(err => console.log(err));   
    }


    render(){
        const clientItems = this.state.clients.map((client, i) => {
            return(
                <ClientItem key={client.id} item={client} />
            )
        })
        return (
            <div className="container-fluid">
            <br/>
                <Link className="btn grey" to ="/admin">Back</Link>
                <h1>Clients</h1> 
                <ul className="collection">{clientItems}</ul>  
   
                <Link to="/clients/add" className="btn-floating btn-large red">
                    <i className="fa fa-plus"></i>
                </Link>
            </div>    
        )
    }
}

export default Clients;