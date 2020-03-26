import React, {Component} from 'react';
import { Link } from "react-router-dom"

class ShowOverview extends Component {
  render(){
      console.log('ShowOverview render this.props ', this.props)
    //   console.log('list of shows', this.props.props.props.data.shows)
      let userInfo = this.props.props.data.userInfo
        // console.log('userInfo._id', this.props.props.props.data.userInfo._id)
    //   let userFirstName = this.props.props.props.data.userInfo.firstName
    //   let userLastName = this.props.props.props.data.userInfo.lastName
    //   let userFullName = `${userFirstName} ${userLastName}`
    //   console.log('userFullName', userFullName)
      console.log(this.props.props.data.userInfo._id)
      const allUserShows = []
      this.props.props.data.shows.forEach(show => {
        show.user.forEach(userId => {
            if (userId === userInfo._id){
                allUserShows.push(show)
            }
        })
        
      })
      console.log(allUserShows)
    // //   const allUserShows = this.props.props.data.shows.filter((show) => 
    //     show._id == this.props.props.data.userInfo._id
    //   )
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

    //   console.log(allUserShows)
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
        {/* <li><Link to="/showdetails">More Info on this Show</Link></li>
        <div>Status</div>
        <div>Date</div>
        <div>Show</div>
        <div>Type</div>
        <div>Role</div> */}
        </div> 
      </div>
    )

    }
}
export default ShowOverview;