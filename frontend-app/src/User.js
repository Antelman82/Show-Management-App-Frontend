import React, {Component} from 'react';
import ShowList from './ShowList'
import axios from 'axios'
const backendUrl = 'http://localhost:4000/api/'

class User extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: this.props.user,
            userInfo: [],
        }
    }

    componentDidMount(){
        this.getAxiosUsers(this.state.username)
    }

    getAxiosUsers(input) {
        let userUrl = `${backendUrl}users/username/${input}`
        axios({method: 'GET', url: userUrl}).then(user =>
            // console.log('usercomp getaxiosusers', user)
            this.setState({
                userInfo: user.data
            })
        )
    }

    render(){

        
        console.log('User Component Render this.props', this.props, this.state)
        return (
            <div>
                <div>{`Username: ${this.props.user}`}</div>
                {/* <div>{`Welcome ${this.state.userInfo[0].firstName} ${this.state.userInfo[0].lastName}`}</div> */}
                <ShowList params={this.props}/>
            </div>
        )
    }
}
export default User;