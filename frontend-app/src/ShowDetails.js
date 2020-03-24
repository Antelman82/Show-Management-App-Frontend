import React, {Component} from 'react';
import axios from 'axios'

const backendUrl = 'http://localhost:4000/api/'

class ShowDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            type: []
        }
    }

    getAxiosType(typeId) {
        console.log(this.props)
        let typesUrl = `${backendUrl}types/${typeId}`
        axios({method: 'GET', url: typesUrl}).then(type =>
        //   this.setState({type: type.data}
        console.log(`this type: `, type)
        )
    }

    render(){
        console.log(this.props)
        console.log(this.props.shows)
        let showDetails = this.props.shows.find(show => show._id === this.props.match.params.id)
        console.log('showDetails', showDetails)
        //loop over shows and find the match id match.params.id
        //this.props.shows.filter (show._id) that matches this.match.params.id
        let roles = showDetails.role.map((role, index) => {
            return <div key={index}>{role}</div>
        })
        console.log(showDetails.type[0])
        // this.getAxiosType(showDetails.type[0])
        // console.log(this.state)


    return (
        <div>
            <div>{showDetails.businessName}</div>
            <div>{showDetails.date}</div>
            <div>{showDetails.Venue}</div>
            {roles}
            <div>{`Show type: ${showDetails.type}`}</div>
            {/* <div>{this.state.type}</div> */}
            <div>{showDetails.status}</div>
        </div>
    )
    }
}
export default ShowDetails;