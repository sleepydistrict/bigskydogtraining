import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import avy from './avy_dog_1.jpg'

class Login extends Component{
  constructor(){
      super();
      this.state = {

      }
  }

  // componentWillMount(){
  //     this.getClasses();
  // }

  // getClasses(){
  //     axios.get('http://localhost:3000/api/classes')
  //     .then(response => {
  //         this.setState({classes: response.data}, () => {
  //             // console.log(this.state);
  //         });
  //     }) 
  //     .catch(err => console.log(err));   
  // }

    // onSubmit(e){
    //   const newClient = {
    //     name: this.refs.name.value,
    //     pet: this.refs.pet.value,
    //     pet_age: this.refs.pet_age.value,
    //     email: this.refs.email.value,
    //     phone: this.refs.phone.value
    //   }
    //   this.AddClient(newClient);
    //   e.preventDefault();
    //   swal("You're Message Has Been Sent")
    // }

  render(){
    return (
      <div>
      <h4 className="center grey white-text">Login</h4>
        <form >
        {/* <form onSubmit={this.onSubmit.bind(this)}> */}
          <div className="input-field">
              <input type="text" name="name" ref="name" />
              <label htmlFor="name">User Name</label>
          </div>
          <div className="input-field">
              <input type="text" name="pet" ref="pet" />
              <label htmlFor="pet">Password</label>
          </div>
          <div className="center" >
          <Link to="/Admin"><input type="submit" value="login" className="btn grey" /></Link>  
          </div>
        </form>  
        <br/> 
          <div className="center card-image">
              <img src={avy} alt="German shepard avalanch dog with ski patrol owner." />
          </div>
          </div>
                            
      )
  }
}

export default Login;
