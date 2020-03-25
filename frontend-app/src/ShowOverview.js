import React, {Component} from 'react';
import { Link } from "react-router-dom"

class ShowOverview extends Component {
  render(){
      console.log('ShowOverview render this.props ', this.props)
    return (
        <div>Show OverView:
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
export default ShowOverview;