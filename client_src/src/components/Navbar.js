import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return (
            <div className="container-fluid navbar-fixed">
                <nav className="blue darken-4">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center">Big Sky Dog Training</a>
                            <ul className="right hide-on-small-only">
                                <li><Link to="/Login"><i className="fa fa-users"></i>Admin</Link></li>
                            </ul>  
                    </div>  
                </nav>  
            </div>    
        )
    }
}

export default Navbar;