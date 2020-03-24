import React, {Component} from 'react';

class ShowDetails extends Component {
    constructor(props){
        super(props)
    }
  render(){
    // console.log(this.props)
    console.log(this.props.shows)
    let showDetails = this.props.shows.find(show => show._id === this.props.match.params.id)
    console.log('showDetails', showDetails)
    //loop over shows and find the match id match.params.id
    //this.props.shows.filter (show._id) that matches this.match.params.id
    let roles = showDetails.role.map(role => {
        return <div>{role}</div>
    })

    return (
        <div>
            <div>{showDetails.businessName}</div>
            <div>{showDetails.date}</div>
            <div>{showDetails.Venue}</div>
            {roles}
            <div>{showDetails.type}</div>
            <div>{showDetails.status}</div>
        </div>
    )
    }
}
export default ShowDetails;