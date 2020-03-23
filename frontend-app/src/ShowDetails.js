import React, {Component} from 'react';

class ShowDetails extends Component {
    constructor(props){
        super(props)
    }
  render(){
    console.log(this.props)
    //loop over shows and find the match id match.params.id
    //this.props.shows.filter (show._id) that matches this.match.params.id

    return (
        <div>
            ShowDetails
            <div></div>
        </div>
    )
    }
}
export default ShowDetails;