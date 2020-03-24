import React, {Component} from 'react';
import ShowList from './ShowList'

const User = props => {


    // let userDetail = this.props.user
    
    console.log('User Component Render this.props', props)
    return (
        <div>
            <div>{`Username: ${props.userInfo.userName}`}</div>
            <div>{`Welcome ${props.userInfo.firstName} ${props.userInfo.lastName}`}</div>
            <ShowList params={props}/>
        </div>
    )
}
export default User;