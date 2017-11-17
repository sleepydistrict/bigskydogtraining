import React, { Component } from 'react';
import header from './header.jpg';


class Classes extends Component{
  render(){
    return(
      <div>
        <img src={header} alt="avy dog approaching a helicopter" />
        <h1>Classes</h1>
      </div>  
    )
  }
}

export default Classes;