import React, {Component} from 'react';

class Customer extends Component {

  render(){
    console.log('customer render this.props ', this.props)

    const allCustomers = this.props.customers.map(customer => {
      const customerShows = this.props.shows.map(show => {
        console.log('show ', show.businessName)
        if (show.businessName === customer.businessName) {
          return (
            <div>
              <li>{show.date}&nbsp;&nbsp;&nbsp;&nbsp;{show.type}&nbsp;&nbsp;&nbsp;&nbsp;{show.status}</li>
            </div>
          )
        }
      })
      return (
        <div className='padding-left'>
            <h4>{customer.businessName}</h4>
            <div>{`${customer.firstName} ${customer.lastName}`}</div>
            <div>{customer.phone}</div>
            <div>{customer.email}</div>
            <div>{customer.comment}</div>
            <div>
              <h5>Show List</h5>
              {customerShows}
            </div>
        </div>
      )
    })


    return (
        <div className='padding-left'>
          {allCustomers}
        </div>
    )
    }
}
export default Customer;