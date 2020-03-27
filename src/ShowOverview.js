import React, {Component} from 'react';
import { Link } from "react-router-dom"

class ShowOverview extends Component {
  render(){
      let userInfo = this.props.props.data.userInfo
      const allUserShows = []
      this.props.props.data.shows.forEach(show => {
        show.user.forEach(userId => {
            if (userId === userInfo._id){
                allUserShows.push(show)
            }
        })
        
      })
      const userShowDivs = allUserShows.map(show => {
        return <div key={show._id} className='padding-left'>
                    <div>{show.businessName}</div>
                    <div>{show.status}</div>
                    <div>{show.date}</div>
                    <div>{show.venue}</div>
                    <div>{show.type}</div>
                    <div>{show.role}</div>
                    <Link to={`/showdetails/${show._id}`}>More Info on this Show</Link>
                </div>
      })

    return (
      <div className='padding-left'>ShowList(s):
        <ul>
          <li className='show-list'><button>2018</button></li>
          <li className='show-list'><button>2019</button></li>
          <li className='show-list'><button>2020</button></li>
          <li className='show-list'><button>2021</button></li>
          <li className='show-list'><button>All</button></li>
        </ul>
        <div className='padding-left'>Show OverView:
            {userShowDivs}
        </div> 
      </div>
    )
    }
}
export default ShowOverview;