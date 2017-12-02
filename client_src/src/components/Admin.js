import React from 'react';
import puppy_2 from './puppy_2.jpg'


const Admin = () => (
  <div className="container-fluid center">
    <img className="responsive-img" width="80%" src={puppy_2} alt="Baby with german sheapard." />
  <h1>Admin</h1>
  <a href="/classes/edit" className="waves-effect waves-light btn">Edit Classes</a>
  <a href="/clients" className="waves-effect waves-light btn">Clients</a>

  </div>  
)

export default Admin;
