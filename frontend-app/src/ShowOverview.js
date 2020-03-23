import React, {Component} from 'react';
import { Link } from "react-router-dom"

class ShowDetails extends Component {
  render(){
    return (
        <div>Show Details:
            <li><Link to="/showdetails">More Info on this Show</Link></li>
            <div>Status</div>
            <div>Date</div>
            <div>Show</div>
            <div>Type</div>
            <div>Role</div>
        </div> 
    )
    }
}
export default ShowDetails;