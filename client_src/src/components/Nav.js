import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
  render(){
    return(
      <div>
        <nav className="grey darken-1">
          <div className="nav-wrapper">
            <Link className="brand-logo" to="/">Big Sky Dog Training</Link>
            <ul className="right hide-on-small-only">
              <li><Link to="/Clients"><i className="fa fa-users"></i>Admin</Link></li>
            </ul>  
          </div>  
        </nav>  
      </div>  
    )
  }
}

export default Nav;