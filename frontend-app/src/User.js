import React, {Component} from 'react';
import ShowList from './ShowList'

class User extends Component {
  render(){
      console.log(this.props)
    return (
        <div>
            <div>Display Current Username</div>
            <ShowList params={this.props}/>
        </div>
    )
    }
}
export default User;