import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return (
            <div className="container-fluid">
                <nav className="grey darken-1">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center">Big Sky Dog Training</a>
                            <ul className="right hide-on-small-only">
                                <li><Link to="/Admin"><i className="fa fa-users"></i>Admin</Link></li>
                            </ul>  
                    </div>  
                </nav>  
            </div>    
        )
    }
}

export default Navbar;