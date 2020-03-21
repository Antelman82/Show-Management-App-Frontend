import React, {Component} from 'react';

class Customer extends Component {
  render(){
    return (
        <div>
            <div>Customer Info</div>
            <div>Name</div>
            <div>email</div>
            <div>phone</div>
            <div>comments</div>
            <div>
              <h4>Show List</h4>
              <li>Status</li>
              <li>Type</li>
              <li>Date</li>
            </div>
        </div>
    )
    }
}
export default Customer;