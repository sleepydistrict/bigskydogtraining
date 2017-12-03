import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddClass extends Component{
  AddClass(newClass){
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/classes',
      data: newClass
    }).then(response => {
      this.props.history.push('/classes');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newClass = {
      class: this.refs.class.value,
      age_range: this.refs.age_range.value,
      length: this.refs.length.value,
      fee: this.refs.fee.value,
      date: this.refs.date.value,
      time: this.refs.time.value
    }
    this.AddClass(newClass);
    e.preventDefault();
  }

  render(){
    return (
      <div>
        <br />
        <Link className="btn grey" to ="/classes">Back</Link>
        <h1>Add Class</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="class" ref="class" />
            <label htmlFor="class">Class: </label>
          </div>
          <div className="input-field">
            <input type="text" name="age_range" ref="age_range" />
            <label htmlFor="age_range">Age Range Of Pet: </label>
          </div>
          <div className="input-field">
            <input type="text" name="length" ref="length" />
            <label htmlFor="length">Length Of Class: </label>
          </div>
          <div className="input-field">
            <input type="text" name="fee" ref="fee" />
            <label htmlFor="fee">Class Fee: </label>
          </div>
          <div className="input-field">
            <input type="text" name="date" ref="date" />
            <label htmlFor="date">Date: </label>
          </div>
          <div className="input-field">
            <input type="text" name="time" ref="time" />
            <label htmlFor="time">Time Of Class: </label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>  
    )
  }
}

export default AddClass;