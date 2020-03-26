import React, {Component} from 'react';

class Customer extends Component {

  render(){
    // console.log('customer render this.props ',this.props)

    const allCustomers = this.props.customers.map(customer => {
      return (
        <div className='padding-left'>
            <h4>{customer.businessName}</h4>
            <div>{`${customer.firstName} ${customer.lastName}`}</div>
            <div>{customer.phone}</div>
            <div>{customer.email}</div>
            <div>{customer.comment}</div>
            <div>
              <h5>Show List</h5>
              <li>Status</li>
              <li>Type</li>
              <li>Date</li>
            </div>
        </div>
      )
    })


    return (
        <div>
          {allCustomers}
        </div>
    )
    }
}
export default Customer;