import React, {Component} from 'react';
import ShowOverview from './ShowOverview'

class User extends Component {
  render(){
    console.log('ShowList render this.props ', this.props)
    return (
        <div>
          <ShowOverview {...this.props}/>
        </div>
    )
    }
}
export default User;