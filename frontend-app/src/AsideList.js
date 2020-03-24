import React, {Component} from 'react';
import { Link } from "react-router-dom"

class AsideList extends Component {
  render(){
    // console.log(this.props)
    
    const showNames = this.props.shows.map(showname => {
        return <li key={showname._id}>
          <Link
            to={`/showdetails/${showname._id}`}>
            {showname.businessName}
          </Link>
        </li>
    })

    return (
        <div>
            {showNames}
        </div>
    )
  }
}
export default AsideList;