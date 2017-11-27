import React, { Component } from 'react';
import puppy_1 from './puppy_1.jpg'

class ClassItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: props.item
        }
    }

    render(){
        return(
            <div className="row">
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={puppy_1} alt="German shepard with infante" />
                </div>
                <li className="collection-item">
            {this.state.item.class} <br />
            {this.state.item.length} <br />
            {this.state.item.fee} <br />
            {this.state.item.date} <br />
            {this.state.item.time} 
            </li>  
                <div className="card-content">
                  <p>Intended to give the owner/handler the education needed to have a successful relationship with their new dog.
                  Throughout these courses, we will focus on building upon basic behaviors that are critical to safe and effective canine management. <br/>
                  -learning to get the behavior you want and how to mark it
                  -basic behaviors and positions <br/>
                  -settling and calming your dog <br/>
                  -easy walking, free of stress and pulling <br/>
                  -getting your dog’s attention <br/>
                  -appropriate socialization
                  </p>
            </div>
                <div className="card-action">
                  <a href="">Register for this class</a>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default ClassItem;