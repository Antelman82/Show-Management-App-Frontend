import React, {Component} from 'react';

class Users extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log('Users render this.props ',this.props)

    const allUsers = this.props.users.map(user => {
      return (
        <div key={user._id}>
            <h4>{`${user.firstName} ${user.lastName}`}</h4>
            <div>{`username: ${user.userName}`}</div>
            <div>{`address: ${user.address}`}</div>
            <div>{`city: ${user.city}`}</div>
            <div>{`state: ${user.state}`}</div>
            <div>{`zipcode: ${user.zip}`}</div>
            <div>{`phone: ${user.phone}`}</div>
            <div>{`email: ${user.email}`}</div>
        </div>
      )
    })


    return (
        <div>
          {allUsers}
        </div>
    )
    }
}
export default Users;