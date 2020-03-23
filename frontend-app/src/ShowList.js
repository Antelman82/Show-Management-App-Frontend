import React, {Component} from 'react';
import ShowOverview from './ShowOverview'

class User extends Component {
  render(){
    return (
        <div>
            <div>ShowList(s):</div>
            <ul>
              <li className='show-list'><button>2018</button></li>
              <li className='show-list'><button>2019</button></li>
              <li className='show-list'><button>2020</button></li>
              <li className='show-list'><button>2021</button></li>
              <li className='show-list'><button>All</button></li>
            </ul>
            <ShowOverview />
        </div>
    )
    }
}
export default User;