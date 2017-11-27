import React, { Component } from 'react';
import axios from 'axios';
import ClientItem from './ClientItem';

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
        console.log(this.state);
        const clientItems = this.state.clients.map((client, i) => {
            return(
                <ClientItem key={client.id} item={client} />
            )
        })
        return (
            <div className="container-fluid">
                <h1>Clients</h1> 
                <ul className="collection">{clientItems}</ul>     
            </div>    
        )
    }
}

export default Clients;