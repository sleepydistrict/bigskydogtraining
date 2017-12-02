import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditClass extends Component{
  constructor(props){
    super(props);
    this.state = {
      class: '',
      age_range: '',
      length: '',
      fee: '',
      date: '',
      time: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

componentWillMount(){
  this.getClassDetails();
}

  getClassDetails(){
    let classId = this.props.match.params.id
    axios.get(`http://localhost:3000/api/classes/${classId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          class: response.data.class,
          age_range: response.data.age_range,
          length: response.data.length,
          fee: response.data.fee,
          date: response.data.date,
          time: response.data.time
        }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
    }

  EditClass(newClass){
    axios.request({
      method: 'put',
      url: `http://localhost:3000/api/classes/${this.state.id}`,
      data: newClass
    }).then(response => {
      this.props.history.push('/classes');
    }).catch(err => console.log(err));
  }

  onDelete(){
    let classId = this.props.match.params.id
    axios.delete(`http://localhost:3000/api/classes/${classId}`)
      .then(response => {
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
  this.EditClass(newClass);
  e.preventDefault();
}
  
handleInputChange(e){
  const target = e.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

  render(){
    return (
      <div>
        <br />
        <Link className="btn grey" to ="/classes">Back</Link>
        <h1>Edit Class</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="class" ref="class" value={this.state.class} 
            onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <input type="text" name="age_range" ref="age_range" value={this.state.age_range} 
            onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <input type="text" name="length" ref="length" value={this.state.length}
            onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <input type="text" name="fee" ref="fee" value={this.state.fee} 
            onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <input type="text" name="date" ref="date" value={this.state.date} 
            onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <input type="text" name="time" ref="time" value={this.state.time} 
            onChange={this.handleInputChange} />
          </div>
          <input type="submit" value="Submit" className="btn" />
          <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
        </form>
      </div>  
    )
  }
}

export default EditClass;