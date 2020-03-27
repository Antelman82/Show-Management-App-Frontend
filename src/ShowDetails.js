import React, {Component} from 'react';
import axios from 'axios'

let backendUrl = process.env.REACT_APP_BACKEND_APP_URL || 'http://localhost:8080/api/'

class ShowDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            type: []
        }
    }

    getAxiosType(typeId) {
        // console.log(this.props)
        let typesUrl = `${backendUrl}types/${typeId}`
        axios({method: 'GET', url: typesUrl}).then(type =>
        //   this.setState({type: type.data}
        console.log(`this type: `, type)
        )
    }

    render(){
        let showDetails = this.props.shows.find(show => show._id === this.props.match.params.id)
        let roles = showDetails.role.map((role, index) => {
            return <div key={index}>{role}</div>
        })
        let users = showDetails.user.map((showUser, index) => {
            console.log('showUser' , showUser)
            console.log('this.props.users ', this.props.users)
            let username = this.props.users.find(user => user._id === showUser)
            console.log('username ', username)
            return <div key={index}>{`${username.firstName} ${username.lastName}`}</div>
        })


    return (
        <div className='padding-left'>
            <div>{showDetails.businessName}</div>
            <div>{showDetails.date}</div>
            <div>{showDetails.Venue}</div>
            {users}
            {roles}
            <div>{`Show type: ${showDetails.type}`}</div>
            <div>{showDetails.status}</div>
        </div>
    )
    }
}
export default ShowDetails;