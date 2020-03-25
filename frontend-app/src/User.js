import React from 'react';
import ShowList from './ShowList'

const User = props => {
    // let userDetail = this.props.user
    // console.log('User Component Render props', props)
    return (
        <div>
            <div>{`Username: ${props.data.userInfo.userName}`}</div>
            <div>{`Welcome ${props.data.userInfo.firstName} ${props.data.userInfo.lastName}`}</div>
            <ShowList props={props}/>
        </div>
    )
}
export default User;