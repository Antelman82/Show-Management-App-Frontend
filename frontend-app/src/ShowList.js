import React, {Component} from 'react';
import ShowOverview from './ShowOverview'

class User extends Component {
  render(){
    console.log('ShowList render this.props ', this.props)
    return (
        <div>
            <div className='padding-left'>ShowList(s):</div>
            <ul>
              <li className='show-list'><button>2018</button></li>
              <li className='show-list'><button>2019</button></li>
              <li className='show-list'><button>2020</button></li>
              <li className='show-list'><button>2021</button></li>
              <li className='show-list'><button>All</button></li>
            </ul>
            <ShowOverview props={this.props}/>
        </div>
    )
    }
}
export default User;